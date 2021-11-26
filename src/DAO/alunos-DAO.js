module.exports = class AlunosDAO {
    constructor(db) {
        this.db = db;
    }

    getAllAlunos(){
        return new Promise((resolve, reject) => {
            this.db.all("SELECT * from ALUNOS", (error, rows) => {
                if(error) reject(error);
                else resolve(rows);
            })
        })
    }

    getIdAlunos(id){
        return new Promise((resolve, reject) => {
            this.db.get("SELECT * from ALUNOS WHERE id=?", id, (error, rows) => {
                if(error) reject(error);
                else resolve(rows);
            })
        })
    }

    postAlunos(aluno){
        return new Promise((resolve, reject) => {
            this.db.run("INSERT into ALUNOS (nome, cpf, endereco, numero, bairro, cidade, estado, telefone, email, idade, plano) values(?,?,?,?,?,?,?,?,?,?,?)", Object.values (aluno), (error, rows) => {
                if(error) reject(error)
                else resolve(rows)
            })
        })
    }

    deleteAlunos(id){
        return new Promise((resolve, reject) => {
            this.db.run("DELETE from ALUNOS WHERE id=?", id, (error, rows) => {
                if(error) reject(error);
                else resolve(rows);
            })
        })
    }

    updateAlunos(id, nome, cpf, endereco, numero, bairro, cidade, estado, telefone, email, idade, plano) {
        const updateAluno = []
        updateAluno.push (nome, cpf, endereco, numero, bairro, cidade, estado, telefone, email, idade, plano, id)
        const sql = "UPDATE ALUNOS SET nome=?, cpf=?, endereco=?, bairro=?, cidade=?, estado=?, telefone=?, email=?, idade=?, plano=? WHERE id=?"

        return new Promise((resolve,reject) =>
        {
            this.db.run(sql,updateAluno,(error,rows) =>
            {
                if(error) reject(error);
                else resolve(rows);
            })
        })
    }
}
