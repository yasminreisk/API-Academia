class Aluno {

    constructor(nome, cpf, endereco, numero, bairro, cidade, estado, telefone, email, idade, plano)
    {
        
        this.nome = nome;
        this.cpf = cpf;
        this.numero = numero;
        this.endereco = endereco;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.telefone = telefone;
        this.email = email;
        this.idade = idade;      
        this.plano = plano;

    }
}

module.exports = Aluno