class Tabelas {
    alunos = ('CREATE TABLE IF NOT EXISTS Alunos id NOT NULL AUTO_INCREMENT, nome varchar (50) NOT NULL, cpf INT (11), endereco varchar (50), numero varchar (5), bairro varchar (50), cidade varchar (50), estado varchar (50), telefone varchar (11), email varchar (50), idade INT (3), plano INT (1)')
}

module.exports = Tabelas;