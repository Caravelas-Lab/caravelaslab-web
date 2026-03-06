# Caravelas Lab Web

Aplicacao web da **Caravelas Lab** para apresentacao de catalogo de produtos impressos em 3D e solicitacao de orcamento personalizado via WhatsApp.

## Sobre o projeto

Este projeto foi construido com foco em:

- exibicao de produtos por categoria
- visualizacao de detalhes dos itens
- fluxo de carrinho para selecao de produtos
- formulario de orcamento personalizado
- contato rapido via WhatsApp

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI + componentes utilitarios
- pnpm

## Requisitos

- Node.js **>= 20.9.0**
- pnpm (recomendado: versao atual, ex: 10.x)

## Como rodar o projeto

1. Entre na pasta do projeto:

```bash
cd /home/caju-03/Documentos/3D/SISTEMA/web
```

2. Configure a versao correta do Node (com nvm):

```bash
nvm install 20
nvm use 20
```

3. Ative o pnpm via Corepack:

```bash
corepack enable
corepack prepare pnpm@10 --activate
```

4. Instale as dependencias:

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

## Scripts disponiveis

```bash
pnpm dev     # ambiente de desenvolvimento
pnpm build   # build de producao
pnpm start   # inicia build de producao
pnpm lint    # analise de lint
```

## Estrutura principal

```text
app/          # rotas e layout principal
components/   # secoes da interface e componentes UI
lib/          # dados de produtos, utilitarios e estado
public/       # imagens e arquivos estaticos
styles/       # estilos complementares
```

## Observacoes

- O projeto usa placeholder de contato (telefone/WhatsApp) em alguns pontos.
- Ajuste os dados da empresa antes de publicar em producao.

## Licenca

Uso interno da Caravelas Lab.
