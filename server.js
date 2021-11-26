const app = require('./app')
const port = 3003

app.listen(port, ()=>{
    console.log(`Servidor rodando: http://localhost:${port}/`)
})