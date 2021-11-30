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
        "numero"   varchar (5),
        "bairro"   varchar(25),
        "cidade"   varchar (25),
        "estado"   varchar (25),
        "telefone" varchar(11),
        "email"    varchar(30),
        "idade"    varchar(3),
        "plano"    varchar(1)
    )`

    // const ADD_ALUNOS_DATA = `
    // INSERT INTO ALUNOS (id, nome, cpf, endereco, numero, bairro, cidade, estado, telefone, email, idade, plano)
    // VALUES
    // (1,'Winry Rockbell', 15489523514, 'Rua Ishval', '32' 'Vila Mariana', ''São Paulo', 'São Paulo', 'winry.rock@fullmetal.com', '25', 1),
    // (2,'Roy Mustang', 45214875965,' Av. Briggs', '563' 'Itaim Bibi', ''São Paulo', 'São Paulo', 'roy.muscrush@fullmetal.com', '32', 3),
    // (3,'Edward Elric', 2556726411,'Rua Xing', '455' 'Pinheiros', ''São Paulo', 'São Paulo', 'edo.eruric@fullmetal.com', '26', 2),
    // `

    function criaTabela() {
    db.run(ALUNOS_SCHEMA,(error) => {
        if(error) console.log('Erro na criação da tabela Alunos')
    })
}

// function populaTabela() {
//     db.run(ADD_ALUNOS_DATA,(error) =>
//     {
//         if(error) console.log('Erro ao popular tabela de Alunos')
//     });
// };

db.serialize( () => {
   criaTabela()
//    populaTabela()
})
