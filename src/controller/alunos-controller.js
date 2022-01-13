const alunosDAO = require('../DAO/alunos-DAO')
const Aluno = require('../model/alunos-model')

const expAlunos = (app, db) => {
    const alunosDB = new alunosDAO(db)

    app.get('/alunos', async (req, res) => {
        try {
            const resposta = await alunosDB.getAllAlunos()
            res.json(resposta)
    }
        catch (error) {
            res.json(error)
    }
  })

    app.post('/alunos', async (req,res) =>{
        try {
            const body = req.body
            const newAluno = new Aluno (body.nome, body.cpf, body.endereco, body.estado, body.telefone, body.email, body.plano)

            const resp = await alunosDB.postAlunos(newAluno)
            res.json(resp)
            }
        catch (error) {
            res.json ({
            "msg": error.message,
            "error": true
      })
    }
  })

  app.get('/alunos/:id', async (req, res) => {
            const id = req.params.id
        try {
            const resposta = await alunosDB.getIdAlunos(id)
            res.json(resposta)
        }
        catch (error){
            res.status(404).json(error)
    }
   })

    app.put('/alunos/:id', async (req, res) => {
        const id = req.params.id
        const body = req.body

        try{
            const get = await alunosDB.getIdAlunos(id)
            const update = get.req[0]

            if (update) {
                const updatedAlunos = new Aluno (body.nome || update.NAME, body.cpf || update.CPF, body.endereco || update.ENDERECO, body.estado || update.ESTADO, body.telefone || update.TELEFONE, body.email || update.EMAIL, body.plano || update.PLANO)

                const resposta = await alunosDB.updateAlunos(id, updatedAlunos)
                res.json(resposta)

            } else {
                res.json ({
                    "msg": `Aluno com id ${id} não existe`,
                    "error": true
                })
            }
        }
        
        catch(error){
            res.json ({
                "msg": error.message,
                "error": true
            })       
        }
    })

    app.delete('/alunos/:id', async (req, res) => {
        const id = parseInt(req.params.id)
        try {
            const resposta = await alunosDB.deleteAlunos(id)
            res.json(resposta)
        }
        catch (error) {
            res.status(404).json ({
                "msg": error.message,
                "error": true
            })
        }
    })
}

module.exports = expAlunos