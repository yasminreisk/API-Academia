const express = require('express')
const cors = require('cors')
const app = express()


const rotasAlunos = require('./src/controller/alunos-controller')
const banco = require('./src/infra/banco')


app.use(express.json())
app.use(cors())


rotasAlunos(app, banco)


module.exports = app