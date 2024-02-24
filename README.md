# N-Tier Architecture

## Documentação

### Camada 'presentation'

É responsável pela exibição das informações ao usuário. Foi utilizada a tecnologia ReactJS, o servidor roda na porta 3000.

Para instalar os pacotes: `npm install`
Executar: `npm start`

### Camada 'logic'

É responsável pelas verificações, rotas e lógicas do sistema, funciona como uma API. Foi utilizada a tecnologia ExpressJS, o servidor roda na porta 3001.

Para instalar os pacotes: `npm install`
Executar: `node index.js`

### Camada 'database'

Faz o acesso e a manipulação do banco de dados MySQL.
