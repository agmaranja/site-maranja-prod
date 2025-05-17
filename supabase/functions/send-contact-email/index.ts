/// <reference path="../deno.d.ts" />

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4'

declare const Deno: {
  env: {
    get(key: string): string | undefined;
  };
};

const SENDGRID_API_KEY = Deno.env.get('SENDGRID_API_KEY')
const TEAM_EMAIL = Deno.env.get('TEAM_EMAIL') // email principal (será o remetente)
const TEAM_EMAILS = Deno.env.get('TEAM_EMAILS') // lista de emails separados por vírgula

interface ContactData {
  nome: string;
  email: string;
  telefone: string;
  mensagem?: string;
}

function generateEmailTemplate(data: ContactData) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Novo Contato - Maranja</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          margin: 0;
          padding: 0;
          background-color: #F5EFE7;
        }
        .email-container {
          max-width: 600px;
          margin: 20px auto;
          background-color: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
          background-color: #1B3B5C;
          color: white;
          padding: 30px;
          text-align: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header h1 {
          margin: 0;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        }
        .content {
          padding: 30px;
        }
        .field {
          background-color: #EEE9DF;
          padding: 15px;
          margin: 10px 0;
          border-radius: 6px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        .field-label {
          font-weight: bold;
          color: #1B3B5C;
          margin-bottom: 5px;
        }
        .button {
          display: inline-block;
          background-color: #1B3B5C;
          color: white;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 6px;
          margin-top: 20px;
          transition: background-color 0.3s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .button:hover {
          background-color: #2d5a8a;
        }
        .footer {
          text-align: center;
          padding: 20px;
          color: #666;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1>Novo Formulário de Contato</h1>
        </div>
        <div class="content">
          <p>Um novo formulário de contato foi recebido com os seguintes dados:</p>
          
          <div class="field">
            <div class="field-label">Nome:</div>
            <div>${data.nome}</div>
          </div>
          
          <div class="field">
            <div class="field-label">E-mail:</div>
            <div>${data.email}</div>
          </div>
          
          <div class="field">
            <div class="field-label">Telefone:</div>
            <div>${data.telefone}</div>
          </div>
          
          <div class="field">
            <div class="field-label">Mensagem:</div>
            <div>${data.mensagem || "Nenhuma mensagem fornecida"}</div>
          </div>
        </div>
        <div class="footer">
          <p>Esta é uma notificação automática do formulário de contato do site Maranja.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateConfirmationTemplate(data: ContactData) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Recebemos seu contato - Maranja</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          margin: 0;
          padding: 0;
          background-color: #F5EFE7;
        }
        .email-container {
          max-width: 600px;
          margin: 20px auto;
          background-color: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
          background-color: #1B3B5C;
          color: white;
          padding: 30px;
          text-align: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header h1 {
          margin: 0;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        }
        .content {
          padding: 30px;
        }
        .message-box {
          background-color: #EEE9DF;
          padding: 20px;
          margin: 20px 0;
          border-radius: 6px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        .highlight {
          color: #1B3B5C;
          font-weight: bold;
        }
        .button {
          display: inline-block;
          background-color: #1B3B5C;
          color: white;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 6px;
          margin-top: 20px;
          transition: background-color 0.3s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .button:hover {
          background-color: #2d5a8a;
        }
        .footer {
          text-align: center;
          padding: 20px;
          color: #666;
          font-size: 14px;
          border-top: 1px solid #EEE9DF;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1>Recebemos seu Contato</h1>
        </div>
        <div class="content">
          <p>Olá <span class="highlight">${data.nome}</span>,</p>
          
          <p>Agradecemos por entrar em contato conosco. Recebemos sua mensagem e retornaremos em breve.</p>
          
          <div class="message-box">
            <p><strong>Detalhes do seu contato:</strong></p>
            <p><strong>Data:</strong> ${new Date().toLocaleDateString('pt-BR')}</p>
            <p><strong>Mensagem:</strong> ${data.mensagem || "Nenhuma mensagem fornecida"}</p>
          </div>
          
          <p>Nossa equipe responderá sua mensagem em até 48 horas úteis.</p>
        </div>
        <div class="footer">
          <p>Este é um e-mail automático de confirmação do recebimento da sua mensagem.</p>
          <p>Por favor, não responda este e-mail.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

async function sendEmail(to: string | string[], subject: string, html: string, isTeamEmail: boolean = false) {
  const recipients = Array.isArray(to) 
    ? to.map(email => ({ email: email.trim() }))
    : [{ email: to }];

  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${SENDGRID_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [{ 
        to: recipients
      }],
      from: { email: TEAM_EMAIL },
      subject: subject,
      content: [{ type: 'text/html', value: html }],
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    console.error('SendGrid API error:', error)
    throw new Error(`Failed to send email: ${response.statusText}`)
  }

  return response
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const data: ContactData = await req.json()

    // Validação dos dados
    if (!data.nome || !data.email || !data.telefone) {
      throw new Error('Missing required fields')
    }

    // Preparar lista de emails da equipe
    const teamEmailsList = TEAM_EMAILS 
      ? TEAM_EMAILS.split(',').map(email => email.trim()).filter(Boolean)
      : [TEAM_EMAIL!];

    if (teamEmailsList.length === 0) {
      throw new Error('No team email configured');
    }

    // Enviar email para a equipe
    const teamEmailHTML = generateEmailTemplate(data)
    await sendEmail(
      teamEmailsList,
      'Novo Contato Recebido',
      teamEmailHTML,
      true
    )

    // Enviar confirmação para o usuário
    const userEmailHTML = generateConfirmationTemplate(data)
    await sendEmail(
      data.email,
      'Recebemos seu contato - Maranja',
      userEmailHTML
    )

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (error) {
    console.error('Error processing request:', error)
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'An unknown error occurred' 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
}) 