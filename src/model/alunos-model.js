module.exports = class Aluno
{
    constructor(nome, cpf, endereco, numero, bairro, cidade, estado, telefone, email, idade, plano)
    {
        if(nome.length > 5)
            this.nome = nome
        else throw new Error('Nome muito curto')
        
        if(cpf.toString().length == 11)
            this.cpf = cpf
        else throw new Error('CPF inválido. Precisa conter 11 dígitos, sem pontuação')

        this.numero = numero;
        this.endereco = endereco;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;

        if(telefone.toString().length == 11)
            this.telefone = telefone
        else throw new Error('Telefone inválido. O telefone precisa conter 11 dígitos, sem pontuação')

        if(email.indexOf('@') == -1)
            throw new Error('Email inválido')
        else
            this.email = email
            
        if(typeof idade == 'number' && idade > 0)
            this.idade = idade
        else throw new Error('Idade inválida')

        
        this.plano = plano;
    }
}