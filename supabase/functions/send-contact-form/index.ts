import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// Tipos
interface ContactFormRequest {
  nome: string;
  telefone: string;
  email: string;
  mensagem?: string;
  servicos?: string[];
  recipients?: string[];
}

interface SendGridPersonalization {
  to: { email: string }[];
}

interface SendGridRequest {
  personalizations: SendGridPersonalization[];
  from: {
    email: string;
    name: string;
  };
  subject: string;
  content: {
    type: string;
    value: string;
  }[];
}

// Configurações
const SENDGRID_API_KEY = Deno.env.get("SENDGRID_API_KEY");
const FROM_EMAIL = "no-reply@maranja.com.br";
const DEFAULT_RECIPIENTS = [
  "agmaranja@gmail.com",
  "bmeduneckas@gmail.com",
  "denermelo2@gmail.com"
];

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"
};

// Logo em base64 (versão menor e otimizada)
const LOGO_BASE64 = "data:image/png;base64,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";

// Template do email para a equipe
function generateEmailTemplate(data: ContactFormRequest): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Novo Contato - Maranja</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          margin: 0;
          padding: 0;
          background-color: #F5EFE7;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #ffffff;
        }
        .header {
          background-color: #1B3B5C;
          color: #ffffff;
          padding: 30px;
          text-align: center;
          border-radius: 8px 8px 0 0;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
        }
        .content {
          padding: 30px 20px;
          background-color: #ffffff;
          border-radius: 0 0 8px 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .field {
          margin-bottom: 20px;
        }
        .field-label {
          font-weight: bold;
          color: #1B3B5C;
          margin-bottom: 5px;
        }
        .field-value {
          color: #333333;
          background-color: #EEE9DF;
          padding: 12px;
          border-radius: 4px;
          box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
        }
        .services-list {
          list-style: none;
          padding: 0;
        }
        .services-list li {
          padding: 8px 12px;
          margin-bottom: 4px;
          background-color: #EEE9DF;
          border-radius: 4px;
          color: #333333;
        }
        .footer {
          text-align: center;
          padding: 20px;
          color: #1B3B5C;
          font-size: 12px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Novo Contato Recebido</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="field-label">Nome</div>
            <div class="field-value">${data.nome}</div>
          </div>
          <div class="field">
            <div class="field-label">Telefone</div>
            <div class="field-value">${data.telefone}</div>
          </div>
          <div class="field">
            <div class="field-label">E-mail</div>
            <div class="field-value">${data.email}</div>
          </div>
          <div class="field">
            <div class="field-label">Serviços de Interesse</div>
            <div class="field-value">
              ${data.servicos && data.servicos.length > 0 
                ? `<ul class="services-list">${data.servicos.map(service => `<li>${service}</li>`).join('')}</ul>`
                : "Nenhum serviço selecionado"}
            </div>
          </div>
          <div class="field">
            <div class="field-label">Mensagem</div>
            <div class="field-value">${data.mensagem || "Nenhuma mensagem fornecida"}</div>
          </div>
        </div>
        <div class="footer">
          <p>Este e-mail foi enviado automaticamente pelo site da Maranja.</p>
          <p>© ${new Date().getFullYear()} Maranja. Todos os direitos reservados.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Template do email de confirmação para o usuário
function generateConfirmationTemplate(data: ContactFormRequest): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Recebemos seu contato - Maranja</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          margin: 0;
          padding: 0;
          background-color: #F5EFE7;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #ffffff;
        }
        .header {
          background-color: #1B3B5C;
          color: #ffffff;
          padding: 30px;
          text-align: center;
          border-radius: 8px 8px 0 0;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
        }
        .content {
          padding: 30px 20px;
          background-color: #ffffff;
          border-radius: 0 0 8px 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          color: #1B3B5C;
        }
        .services-list {
          list-style: none;
          padding: 0;
          margin: 20px 0;
        }
        .services-list li {
          padding: 8px 12px;
          margin-bottom: 4px;
          background-color: #EEE9DF;
          border-radius: 4px;
          color: #333333;
        }
        .button {
          background-color: #1B3B5C;
          color: white;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 4px;
          display: inline-block;
          margin-top: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          transition: background-color 0.3s ease;
        }
        .button:hover {
          background-color: #2c5a8a;
        }
        .footer {
          text-align: center;
          padding: 20px;
          color: #1B3B5C;
          font-size: 12px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Recebemos seu contato!</h1>
        </div>
        <div class="content">
          <p>Olá ${data.nome},</p>
          <p>Obrigado por entrar em contato com a Maranja. Recebemos sua mensagem e em breve entraremos em contato para discutir como podemos ajudar sua clínica.</p>
          
          ${data.servicos && data.servicos.length > 0 ? `
          <p>Serviços de seu interesse:</p>
          <ul class="services-list">
            ${data.servicos.map(service => `<li>${service}</li>`).join('')}
          </ul>
          ` : ''}
          
          <p>Enquanto isso, você pode conhecer mais sobre nossos serviços visitando nosso site.</p>
          <a href="https://maranja.com.br" class="button">Visitar Site</a>
        </div>
        <div class="footer">
          <p>Este e-mail foi enviado automaticamente pelo site da Maranja.</p>
          <p>© ${new Date().getFullYear()} Maranja. Todos os direitos reservados.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Função principal
serve(async (req) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Validar API Key
    if (!SENDGRID_API_KEY) {
      throw new Error("SendGrid API Key não configurada");
    }

    // Processar requisição
    const data: ContactFormRequest = await req.json();

    // Validar campos obrigatórios
    if (!data.nome || !data.telefone || !data.email) {
      return new Response(
        JSON.stringify({ error: "Todos os campos obrigatórios devem ser preenchidos" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Preparar destinatários
    const emailRecipients = data.recipients || DEFAULT_RECIPIENTS;

    // Enviar email para a equipe
    const teamEmailRequest: SendGridRequest = {
      personalizations: [{
        to: emailRecipients.map(email => ({ email })),
      }],
      from: {
        email: FROM_EMAIL,
        name: "Maranja"
      },
      subject: "Novo contato do site Maranja",
      content: [{
        type: "text/html",
        value: generateEmailTemplate(data),
      }],
    };

    const teamResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teamEmailRequest),
    });

    if (!teamResponse.ok) {
      throw new Error(`Erro ao enviar email para equipe: ${teamResponse.status}`);
    }

    // Enviar email de confirmação para o usuário
    const confirmationRequest: SendGridRequest = {
      personalizations: [{
        to: [{ email: data.email }],
      }],
      from: {
        email: FROM_EMAIL,
        name: "Maranja"
      },
      subject: "Recebemos seu contato - Maranja",
      content: [{
        type: "text/html",
        value: generateConfirmationTemplate(data),
      }],
    };

    const confirmationResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(confirmationRequest),
    });

    if (!confirmationResponse.ok) {
      console.error("Erro ao enviar email de confirmação:", await confirmationResponse.text());
      throw new Error(`Erro ao enviar email de confirmação: ${confirmationResponse.status}`);
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error) {
    console.error("Erro:", error);
    return new Response(
      JSON.stringify({ error: "Erro ao processar requisição" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
