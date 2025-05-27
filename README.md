# Site Maranja - Produção

Este é o repositório oficial do site de produção da Maranja, desenvolvido com tecnologias modernas e focado em uma experiência de usuário excepcional.

## 🚀 Tecnologias Utilizadas

- [Vite](https://vitejs.dev/) - Build tool e servidor de desenvolvimento
- [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript com tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [shadcn/ui](https://ui.shadcn.com/) - Componentes de UI reutilizáveis
- [Supabase](https://supabase.com/) - Backend as a Service

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Git

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/agmaranja/site-maranja-prod.git
cd site-maranja-prod
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

O site estará disponível em `http://localhost:5173`

## 🏗️ Estrutura do Projeto

```
site-maranja-prod/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/         # Páginas da aplicação
│   ├── styles/        # Estilos globais
│   └── utils/         # Funções utilitárias
├── public/            # Arquivos estáticos
└── supabase/         # Configurações do Supabase
```

## 🚀 Deploy

O site está configurado para deploy automático através do GitHub Actions. Cada push para a branch `main` aciona o processo de deploy.

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
```

## 🤝 Contribuindo

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para suporte, envie um email para agmaranja@gmail.com ou abra uma issue no repositório.

## 🙏 Agradecimentos

- Equipe de desenvolvimento
- Comunidade open source
- Todos os contribuidores
