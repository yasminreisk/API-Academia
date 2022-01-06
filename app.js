const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const cors = require('cors')

const alunos = require('./src/controller/alunos-controller')
const db = require('./src/infra/banco')

app.use(express.json())
app.use(cors())
app.use((req, res, next)=>
{
  console.log('Middleware OK')
  next()
})

alunos(app, db)

app.listen(PORT, ()=>
{
console.log("Servidor rodando: http://localhost:3000");
})