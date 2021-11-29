const alunosDAO = require('../DAO/alunos-DAO')
const Alunos = require('../model/alunos-model')
const db = require ('../infra/banco')

module.exports = (app) => {
    const alunosDB = new alunosDAO(db)

    app.get('/aluno', async (req, res) => {
        try {
            const resposta = await alunosDB.getAllAlunos()
            res.status(200).json ({
                result: resposta,
                count: resposta.length
            })
        } catch (erro) {
            res.status(400).json ({
                message: erro.message,
                error: true
            })
        }
    })

    app.get('/aluno/:id', async (req, res) => {
        const { id } = req.params
        try {
            if(parseInt(id)){
                const resposta = await alunosDB.getIdAlunos(id)
                if (resposta) {
                    res.status(200).json({
                        result: resposta,
                        count: resposta.length
                })
            }
            else{
                throw new Error("Nenhum aluno encontrado.")
            }
        }
        else{
            throw new Error("É esperado um ID do tipo inteiro.")
            }
        }
        catch(erro){
            res.status(400).json({
                message: erro.message,
                error: true
            })
    }
})

    app.post('/aluno', async (req,res) =>{
        const {nome, cpf, endereco, numero, bairro, cidade, estado, telefone, email, idade, plano} = req.body
        const newAluno = new Alunos (nome, cpf, endereco, numero, bairro, cidade, estado, telefone, email, idade, plano)

        try{
            await alunosDB.postAluno(newAluno)
            res.status(201).json({
                message: "Aluno inserido com sucesso",
                error: false
            })
        }
        catch{
            res.status(400).json({
                message: "Erro ao inserir aluno.",
                serverLog: erro.message,
                error: true
            })
        }
    })


    app.put('/aluno/:id', async (req, res) => {
        const {nome, cpf, endereco, numero, bairro, cidade, estado, telefone, email, idade, plano} = req.body
        const {id} = req.params
        try{
            await alunosDB.putAluno(nome, cpf, endereco, numero, bairro, cidade, estado, telefone, email, idade, plano)
            res.status(200).json({
                message: `Aluno com id: ${id}, foi atualizado.`,
                error: false
            })
        }
        catch(erro){
            res.status(400).json({
                message: "Erro ao atualizar o aluno, verifique se os campos passados são válidos.",
                serverLog: erro.message,
                error: true
            })
        }
    })

    app.delete('/aluno/:id', async (req, res) => {
        const {id} = req.params
        try {
            await alunosDB.deleteAluno(id)
            res.status(200).json({
                message: `Aluno com id: ${id}, foi deletado`,
                error: false
            })
        }
        catch (erro) {
            res.status(400).json ({
                message: "Erro ao deletar aluno",
                serverLog: erro.message,
                error: true
            })
        }
    })
}