import React from 'react';

const EmailPreview = () => {
  const previewData = {
    nome: "João Silva",
    telefone: "(11) 98765-4321",
    email: "joao.silva@exemplo.com",
    mensagem: "Olá, gostaria de saber mais sobre os serviços da Maranja."
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">Preview do Email</h1>
        <iframe
          srcDoc={`
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
                  background-color: #f9f9f9;
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
                  padding: 20px;
                  text-align: center;
                  border-radius: 8px 8px 0 0;
                }
                .logo {
                  max-width: 150px;
                  height: auto;
                  margin-bottom: 15px;
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
                  background-color: #f5f5f5;
                  padding: 10px;
                  border-radius: 4px;
                }
                .footer {
                  text-align: center;
                  padding: 20px;
                  color: #666666;
                  font-size: 12px;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <img src="https://maranja.com.br/logo.png" alt="Maranja Logo" class="logo">
                  <h1>Novo Contato Recebido</h1>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="field-label">Nome</div>
                    <div class="field-value">${previewData.nome}</div>
                  </div>
                  <div class="field">
                    <div class="field-label">Telefone</div>
                    <div class="field-value">${previewData.telefone}</div>
                  </div>
                  <div class="field">
                    <div class="field-label">E-mail</div>
                    <div class="field-value">${previewData.email}</div>
                  </div>
                  <div class="field">
                    <div class="field-label">Mensagem</div>
                    <div class="field-value">${previewData.mensagem}</div>
                  </div>
                </div>
                <div class="footer">
                  <p>Este e-mail foi enviado automaticamente pelo site da Maranja.</p>
                  <p>© ${new Date().getFullYear()} Maranja. Todos os direitos reservados.</p>
                </div>
              </div>
            </body>
            </html>
          `}
          className="w-full h-[800px] border-0 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default EmailPreview; 