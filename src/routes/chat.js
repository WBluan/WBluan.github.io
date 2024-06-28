const express = require('express');
const db = require('../database/database'); // Importa o banco de dados SQLite
const router = express.Router();

// Rota para obter opções de resposta
router.get('/response-options', async (req, res) => {
    try {
        const sql = 'SELECT id, option_text FROM response_options';
        const options = await db.all(sql);
        res.json(options);
    } catch (error) {
        console.error('Erro ao buscar opções de resposta:', error);
        res.status(500).json({ error: 'Falha ao buscar opções de resposta' });
    }
});

// Rota para enviar mensagem do usuário
router.post('/message', async (req, res) => {
    const { role, content } = req.body;

    if (!role || !content) {
        return res.status(400).json({ error: 'Role and content are required' });
    }

    const sql = 'INSERT INTO messages (role, content, timestamp) VALUES (?, ?, datetime("now"))';
    const params = [role, content];

    db.run(sql, params, function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ id: this.lastID, role, content });
    });
});

module.exports = router;