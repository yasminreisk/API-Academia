module.exports = app => {
    app.get ('/alunos', (req, res) => {
        res.send ('Você está na rota de alunos e está realizando um GET.')
    })

    app.post('/alunos', (req, res) => {
        console.log(req.body)
        res.send ('Você está na rota de alunos e está realizando um POST.')
    })
    
}