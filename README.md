# Chronos — Pomodoro

Chronos é um aplicativo de temporizador Pomodoro construído com React e TypeScript. Ele ajuda você a gerenciar tempo e ciclos de trabalho/descanso usando a técnica Pomodoro, com um design simples, acessível e fácil de personalizar.

## Funcionalidades

- Temporizador Pomodoro com ciclos de trabalho e descanso configuráveis
- Gerenciamento de tarefas (criar, iniciar, pausar e finalizar ciclos ligados a tarefas)
- Contagem regressiva precisa usando Web Worker para evitar bloqueios da UI
- Histórico / ciclos — visualização de ciclos concluidos (dependendo das páginas implementadas)
- Sons/alertas ao término de cada ciclo
- Layout responsivo com componentes reutilizáveis e CSS Modules

## Tecnologias

- React 19 + TypeScript
- Vite como bundler e servidor de desenvolvimento
- CSS Modules para escopo de estilos por componente
- Web Worker para a lógica do temporizador (arquivo em `src/workers/timerWorker.js`)
- Bibliotecas auxiliares: `react-router`, `react-toastify`, `lucide-react` (ícones)

## Demo

Abra o aplicativo localmente para testar a aplicação. Se quiser incluir capturas de tela, adicione imagens na pasta `public/images` e faça referência aqui.

## Instalação

Pré-requisitos: Node.js (versão 18+ recomendada) e npm ou pnpm.

1. Clone o repositório:

```bash
git clone https://github.com/davi-muniiz/chronos-pomodoro.git
cd chronos-pomodoro
```

2. Instale dependências:

```bash
npm install
# ou
pnpm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite iniciará o servidor e geralmente abrirá a aplicação em http://localhost:5173 (confirme no terminal).

## Scripts úteis

- `npm run dev` — inicia o servidor de desenvolvimento (Vite)
- `npm run build` — compila o projeto para produção (roda TypeScript build + Vite build)
- `npm run preview` — serve a build de produção localmente para testes
- `npm run lint` — executa o ESLint

## Uso rápido

1. Abra o app no navegador.
2. Crie uma nova tarefa ou selecione uma existente.
3. Defina a duração do ciclo (padrões típicos: 25 min trabalho / 5 min descanso) nas configurações, se disponível.
4. Inicie o temporizador. Você pode pausar, reiniciar ou marcar a tarefa como concluída quando terminar o ciclo.

## Estrutura do projeto (pontos principais)

- `src/components/` — componentes React reutilizáveis (Botões, Inputs, Contador, etc.)
- `src/pages/` — páginas principais (Home, Configurações, Sobre)
- `src/contexts/TaskContext` — contexto para gerenciar estado de tarefas e ciclos
- `src/workers/` — Web Worker do temporizador (lógica de contagem)
- `src/utils/` — utilitários (formatação, seleção de próximo ciclo, carregamento de áudio)

## Desenvolvimento

- Siga a seção de instalação acima.
- Para adicionar novos recursos, crie componentes em `src/components` e mantenha os estilos em CSS Modules (`.module.css`).
- Prefira lógica que faça a separação entre UI e estado (use context/reducers em `src/contexts`).
- Use o Web Worker para lógica de temporização sensível à performance. Considere testes manuais ao modificar o worker, já que o ambiente do worker difere do DOM.

## Testes e qualidade

Atualmente não há uma suíte de testes configurada no repositório. Recomenda-se adicionar testes unitários (Jest + Testing Library) para componentes críticos e testes de integração para fluxos de tempo quando possível.

## Contribuição

Contribuições são bem-vindas! Siga estes passos básicos:

1. Fork do repositório
2. Crie uma branch com a sua feature: `git checkout -b feat/nova-coisa`
3. Faça commits claros e atômicos
4. Abra um Pull Request descrevendo a mudança

Antes de enviar PRs maiores, abra uma issue para discutir o design.

## Licença

Nenhuma licença foi adicionada a este repositório. Se desejar um padrão permissivo, considere adicionar um arquivo `LICENSE` com a licença MIT.

## Créditos

Este projeto foi desenvolvido seguindo o curso ministrado pelo professor Otávio Miranda.

## Contato

Desenvolvedor: Davi Muniz

Repositório: https://github.com/davi-muniiz/chronos-pomodoro

