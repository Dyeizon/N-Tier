# N-Tier Architecture

## Documentação

Quando o usuário solicitar para que gere a imagem, a camada 'presentation' envia uma requisição HTTP via fetch para um endpoint da camada 'logic' para que ela encaminhe a solicitação do acesso para a camada 'database', que retorna uma query SQL com 'id | imagem', que então é tratada pela camada 'logic' e direcionada para a camada 'presentation', que foi a primeira solicitante .

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
