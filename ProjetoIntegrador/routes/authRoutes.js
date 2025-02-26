const express = require('express');
const db = require('../models/database');
const router = express.Router();

router.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    db.run(`INSERT INTO users (name, email, password) VALUES (?, ?, ?)`, [name, email, password], (err) => {
        if (err) return res.status(400).json({ error: "Erro ao cadastrar" });
        res.redirect('/');
    });
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    db.get(`SELECT * FROM users WHERE email = ? AND password = ?`, [email, password], (err, user) => {
        if (!user) return res.status(400).json({ error: "Credenciais inválidas" });
        res.redirect('/dashboard.html');
    });
});

module.exports = router;
