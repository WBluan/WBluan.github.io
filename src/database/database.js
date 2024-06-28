// backend/database.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Caminho para o arquivo do banco de dados SQLite
const dbPath = path.resolve(__dirname, '../database/chatbot.db');

// Cria a conexão com o banco de dados
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Conexão com o banco de dados SQLite estabelecida.');
    }
});

module.exports = db;