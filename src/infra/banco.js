const path = require ('path')
const pathDatabase = path.resolve(__dirname,'../infra','database.db')
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(pathDatabase)

process.on('SIGINT', () =>
    db.close(() => {
        console.log('Database encerrado!')
        process.exit(0)
    })
)

module.exports = db;