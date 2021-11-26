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

    const ADD_ALUNOS_DATA = `
    INSERT INTO Alunos(id, nome, cpf, endereco, numero, bairro, cidade, estado, telefone, email, idade, plano)
    VALUES
    (1,'Winry Rockbell',14869537845, 'Rua Briggs', 563 , 'Vila Mariana', 'São Paulo', '1144256384', 'winry.rock@gmail.com', 25, 2),
    (2,'Roy Mustang',69857538569, 'Av. Homunculus', 58 , 'Jardins', 'São Paulo', '1145980014', 'roy.muscrush@hotmail.com', 32, 1),
    (3,'Alex Louis Armstrong',58724596524, 'Rua Resembool', 7 , 'Jardim Paulista', 'São Paulo', '1144176859', 'alexzinho@gmail.com', 45, 2),
    (4,'Edward Elric',18463524782, 'Av. Ishval', 963 , 'Vila Madalena', 'São Paulo', '1146872496', 'edo.eruric@hotmail.com', 25, 2),
    (5,'Selim Bradley',46687524658, 'Rua Rush Valley', 45 , 'Saúde', 'São Paulo', '1144259657', 'happy.children@gmail.com', 18, 3)
    `

    function criaTabela() {
    db.run(ALUNOS_SCHEMA,(error) => {
        if(error) console.log(error)
    })
}

function populaTabela() {
    db.run(ADD_ALUNOS_DATA,(error) =>
    {
        if(error) console.log("Erro ao popular tabela de alunos")
    })
}

db.serialize( () => {
   criaTabela();
   populaTabela();
})
