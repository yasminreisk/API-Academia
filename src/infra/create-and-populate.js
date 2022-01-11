const sqlite3 = require('sqlite3').verbose()
const path = require('path')
const pathDatabase = path.resolve(__dirname, 'database.db')
const db = new sqlite3.Database(pathDatabase)

const ALUNOS_SCHEMA = `
    CREATE TABLE IF NOT EXISTS "ALUNOS" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,
        "nome"     varchar(50),
        "cpf"      varchar(11),
        "endereco" varchar(50),
        "estado"   varchar (10),
        "telefone" varchar(11),
        "email"    varchar(30),
        "idade"    varchar(3),
        "plano"    varchar(10)
    )`

    function criaTabela() {
    db.run(ALUNOS_SCHEMA,(error) => {
        if(error) console.log('Erro ao criar a tabela alunos.')
    })
}

db.serialize( () => {
   criaTabela()
})
