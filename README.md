# SpaceX Client

Cliente criado em React e Redux para a API [SpaceX-API](https://github.com/r-spacex/SpaceX-API).

## Como Começar

Esse projeto foi feito usando a CLI [create-react-app](https://github.com/facebook/create-react-app). Todos os scripts estão documentados em seu repositório. Resumindo:

- `npm run start` para iniciar o ambiente de desenvolvimento local
- `npm run build` para construir o app em ambiente de produção

## Requerimentos

- redux
- react-redux
- react-router
- react-prop-types
- bulma pro CSS

## Rotas

Roteamento de páginas feito com [react-router](https://github.com/ReactTraining/react-router).

- `/`: Página principal. Contagem regressiva para o próximo lançamento com alguns detalhes.
- `/about/`: Sobre o app.
- `/launches/`: Lista de todos os lançamentos.
- `/launches/next`: Detalhes sobre o próximo lançamento.
- `/launches/latest`: Detalhes sobre o último lançamento.
- `/launches/:id`: Detalhes sobre um lançamento específico, a partir do `id`.
- `/missions/`: Lista de todas as missões.
- `/missions/:id`: Detalhes sobre uma missão, a partir do `id`.
- `/rockets/`: Lista de todos os foguetes.
- `/rockets/:id`: Detalhes sobre um foguete, a partir do `id`.

## Licença

Esse projeto usa a licença MIT. Veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.

---

💻✨ Code wizardry by **João Gomes** ([@jlfgms](https://www.twitter.com/jlfgms)) and **Rodrigo Melo** ([...](...))