// variáveis globais deste módulo
const express = require("express");

const PORT = process.env.PORT || 3000;
const db = require("./db");
const app = express()

app.use(express.static('client'))
// http://localhost:3000/login.html

app.get('/', (req, res) => res.send('Hello world'));
app.listen(PORT, () => {
    console.log(`Estou ouvindo na porta ${PORT}`);
  })

  async function teste () {
    const pessoas = await db.selectPessoa();
    console.log(pessoas)
  }
  teste()