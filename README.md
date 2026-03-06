# Caravelas Lab Web

Aplicação web da **Caravelas Lab** para apresentação de catálogo de produtos impressos em 3D e solicitação de orçamento personalizado via WhatsApp.

## Sobre o projeto

Este projeto foi construído com foco em:

- exibição de produtos por categoria
- visualização de detalhes dos itens
- fluxo de carrinho para seleção de produtos
- formulário de orçamento personalizado
- contato rápido via WhatsApp

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI + componentes utilitarios
- pnpm

## Requisitos

- Node.js **>= 20.9.0**
- pnpm (recomendado: versão atual, ex: 10.x)

## Como rodar o projeto

1. Entre na pasta do projeto:

```bash
cd /home/caju-03/Documentos/3D/SISTEMA/web
```

2. Configure a versão correta do Node (com nvm):

```bash
nvm install 20
nvm use 20
```

3. Ative o pnpm via Corepack:

```bash
corepack enable
corepack prepare pnpm@10 --activate
```

4. Instale as dependências:

```bash
pnpm install
```

5. Rode em desenvolvimento:

```bash
pnpm dev
```

6. Abra no navegador:

```text
http://localhost:3000
```

## Scripts disponíveis

```bash
pnpm dev     # ambiente de desenvolvimento
pnpm build   # build de produção
pnpm start   # inicia build de produção
pnpm lint    # análise de lint
```

## Estrutura principal

```text
app/          # rotas e layout principal
components/   # seções da interface e componentes UI
lib/          # dados de produtos, utilitários e estado
public/       # imagens e arquivos estáticos
styles/       # estilos complementares
```

## Observações

- O projeto usa placeholder de contato (telefone/WhatsApp) em alguns pontos.
- Ajuste os dados da empresa antes de publicar em produção.

## Licença

Uso interno da Caravelas Lab.
