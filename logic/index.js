const express = require('express')
const app = express()
const port = 3001
var cors = require('cors');

const gerarImagem = require("../database/imagensDAO");

app.use(cors());

app.get('/gerarImagem', (req, res) => {
    gerarImagem()
    .then(jsonData => {
      res.send(JSON.parse(jsonData));
    })
    .catch(err => {
      console.error('Error:', err);
    });
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
