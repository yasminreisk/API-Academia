const sqlite3 = require ('sqlite3').verbose();
const banco = new sqlite3.Database ('../banco.db')


module.exports = banco;