# Portfolio Sarita

Portfólio pessoal profissional desenvolvido para a consultora fiscal Sarita Macedo. A aplicação apresenta serviços, competências, trajetória profissional e informações de contato utilizando Angular 22, Tailwind CSS 4 e uma estrutura moderna de componentes.

## Visão geral

Este projeto é uma landing page responsiva e visualmente atualizada com foco em:

- Apresentar serviços de consultoria fiscal e contábil.
- Exibir competências técnicas e experiências profissionais.
- Permitir contato rápido via WhatsApp e e-mail.
- Oferecer navegação fluida em desktop e mobile.

## Tecnologias usadas

- Angular `^22.0.0`
- Tailwind CSS `^4.3.2`
- TypeScript `~6.0.2`
- Vitest `^4.0.8` para testes unitários
- `@angular/build` para compilação do aplicativo
- `@tailwindcss/postcss` para integração Tailwind + PostCSS

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone git@github.com:TarjaBlack/sarita-analista-fiscal.git
cd sarita-analista-fiscal
npm install
```

## Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm start
```

Acesse `http://localhost:4200/` para ver o site localmente. O Angular recarrega a aplicação automaticamente sempre que um arquivo é alterado.

## Build de produção

Para gerar os artefatos de produção:

```bash
npm run build
```

Os arquivos resultantes são gravados em `dist/`.

## Testes

Executar testes unitários:

```bash
npm test
```

Gerar relatório de cobertura de teste:

```bash
npm run test:coverage
```

## Estrutura do projeto

- `src/` — código-fonte principal da aplicação.
- `src/app/` — componente principal `App` e arquivos de estilo/componentização.
- `src/assets/` — recursos estáticos, imagens e ícones.
- `public/` — `index.html` e arquivos públicos.
- `tailwind.config.js` — configuração do Tailwind CSS.
- `postcss.config.js` / `postcss.config.json` — configuração PostCSS para Tailwind.
- `tsconfig.json` — configuração TypeScript geral.
- `tsconfig.app.json` — configuração de build do aplicativo.
- `tsconfig.spec.json` — configuração para testes.

## Arquitetura do componente

O app é construído como um componente standalone integrado a `CommonModule`:

- `App` controla o estado do menu mobile e o comportamento de rolagem.
- Sinais reativos (`signal`) são usados para gerenciar o estado local: `isMenuOpen`, `scrolled`, `skills`, `services` e `experiences`.
- O template contém navegação responsiva, seções de serviços e trajetória profissional, e chamadas de contato.

## Observações adicionais

- Todos os testes foram atualizados para cobertura completa do componente principal.
- A configuração atual é compatível com Angular CLI 22 e com a integração Tailwind CSS 4.

## Contribuição

Se quiser contribuir ou enviar atualizações:

1. Faça um fork do repositório.
2. Crie uma branch com sua mudança.
3. Abra um pull request descrevendo as alterações.

## Licença

Este projeto é fornecido sem licença explícita. Adicione uma licença apropriada se desejar abrir o código para terceiros.
