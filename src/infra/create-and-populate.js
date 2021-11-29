const sqlite3 = require("sqlite3").verbose()
const path = require('path')
const pathDatabase = path.resolve(__dirname,'database.db')
const db = new sqlite3.Database(pathDatabase)

const ALUNOS_SCHEMA = `
    CREATE TABLE IF NOT EXISTS "Alunos" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,
        "nome"     varchar(50),
        "cpf"      varchar(11),
        "endereco" varchar(50),
        "numero"   varchar (5),
        "bairro"   varchar(25),
        "cidade"   varchar (25),
        "estado"   varchar (25),
        "telefone" varchar(11),
        "email"    varchar(30),
        "idade"    varchar(3),
        "plano"    varchar(1)
    )`

    function criaTabela() {
    db.run(ALUNOS_SCHEMA,(error) => {
        if(error) console.log('Erro na criação da tabela Alunos')
    })
}

db.serialize( () => {
   criaTabela();
})
