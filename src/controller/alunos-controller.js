const alunosModel = require ('../model/alunos-model')

module.exports = app => {

    app.get ('/alunos', async (req, res) => {
        try {
            const alunoMatricula = await alunosModel.lista(res)
            res.send (alunoMatricula)
        } catch (erro) {
            res.send (erro)
        }
    })

    app.post('/alunos', async (req, res) => {
        try {
            const aluno = req.body
            const alunoMat = await alunosModel.postar(aluno, res)
            res.send(200).send(alunoMat)
        } catch (erro) {
            res.send (400).send(erro)
        }
    })
    
}