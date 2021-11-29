const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

const alunos = require('./src/controller/alunos-controller')
const db = require('./src/infra/banco')

app.use(express.json())
app.use((req, res, next)=>
{
  console.log('middleware ok')
  next()
})

alunos(app, db)

app.listen(port, ()=>
{
console.log(`Servidor rodando: http://localhost:${port}/`);
})