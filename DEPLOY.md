# Guia de Deploy - Maranjá Site

Este guia descreve o processo de deploy do site Maranjá no GitHub Pages com domínio personalizado.

## Pré-requisitos

- Node.js instalado
- Git instalado
- Acesso ao repositório GitHub
- Domínio personalizado configurado (opcional)

## Configuração do Projeto

1. Clone o repositório:
```bash
git clone https://github.com/agmaranja/maranja-site-new.git
cd maranja-site-new
```

2. Instale as dependências:
```bash
npm install
```

3. Verifique se o arquivo `vite.config.ts` está configurado corretamente:
```typescript
export default defineConfig(({ mode }) => ({
  base: "./",
  publicDir: "public",
  build: {
    outDir: "docs",
    assetsDir: "assets",
    copyPublicDir: true,
  }
}));
```

4. Certifique-se que o arquivo `CNAME` existe na pasta `public` com o conteúdo:
```
maranja.com.br
```

## Processo de Build e Deploy

1. Gere uma nova build:
```bash
npm run build
```

2. Verifique se a pasta `docs` foi gerada com:
- Arquivo index.html
- Pasta assets com JS/CSS
- Arquivo CNAME
- Outros recursos estáticos

3. Commit e push das alterações:
```bash
git add .
git commit -m "build: atualização do site"
git push
```

## Configuração do GitHub Pages

1. Acesse as configurações do repositório no GitHub
2. Vá para a seção "Pages"
3. Configure:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /docs
   - Custom domain: maranja.com.br
   - Enforce HTTPS: Ativado

## Verificação do Deploy

1. Aguarde alguns minutos para a propagação das alterações
2. Verifique se o site está acessível em:
   - https://maranja.com.br
   - https://agmaranja.github.io/maranja-site-new

## Troubleshooting

### Erro 404 em Recursos
- Verifique se base: "./" está configurado no vite.config.ts
- Confirme que todos os assets estão na pasta docs/assets

### Problemas de HTTPS
- Certifique-se que "Enforce HTTPS" está ativado no GitHub Pages
- Aguarde a propagação do certificado SSL (pode levar até 24h)

### Domínio Personalizado
- Verifique se o CNAME está presente em docs/
- Configure os registros DNS:
  ```
  A     @     185.199.108.153
  A     @     185.199.109.153
  A     @     185.199.110.153
  A     @     185.199.111.153
  CNAME www   agmaranja.github.io
  ```

## Notas Importantes

- Sempre use HashRouter em vez de BrowserRouter para compatibilidade
- Mantenha o CNAME tanto em public/ quanto em docs/
- Use caminhos relativos para recursos estáticos
- Aguarde a propagação do DNS após alterações (até 24h) 