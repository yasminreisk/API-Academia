const sqlite3 = require("sqlite3").verbose()
const path = require('path')
const pathDatabase = path.resolve(__dirname,'database.db')
const db = new sqlite3.Database(pathDatabase)

const ALUNOS_SCHEMA = `
    CREATE TABLE IF NOT EXISTS "Alunos" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,
        "nome"     varchar(50),
        "cpf"      INT(11),
        "endereco" varchar(50),
        "numero"   INT (5),
        "bairro"   varchar(25),
        "cidade"   varchar (25),
        "estado"   varchar (25),
        "telefone" varchar(11),
        "email"    varchar(30),
        "idade"    INT(3),
        "plano"    INT(1)
    )`

    function criaTabela() {
    db.run(ALUNOS_SCHEMA,(error) => {
        if(error) console.log('Erro na criação da tabela Alunos')
    })
}

db.serialize( () => {
   criaTabela();
})
