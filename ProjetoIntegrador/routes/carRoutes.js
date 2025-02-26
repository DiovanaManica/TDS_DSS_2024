const express = require('express');
const db = require('../models/database');
const router = express.Router();

router.post('/register-vehicle', (req, res) => {
    const { user_id, model, plate } = req.body;
    db.run(`INSERT INTO vehicles (user_id, model, plate) VALUES (?, ?, ?)`, [user_id, model, plate], (err) => {
        if (err) return res.status(400).json({ error: "Erro ao cadastrar veículo" });
        res.redirect('/agendamento.html');
    });
});

router.post('/schedule', (req, res) => {
    const { user_id, vehicle_id, date, time, type } = req.body;
    db.run(`INSERT INTO schedules (user_id, vehicle_id, date, time, type) VALUES (?, ?, ?, ?, ?)`, [user_id, vehicle_id, date, time, type], (err) => {
        if (err) return res.status(400).json({ error: "Erro ao agendar" });
        res.redirect('/dashboard.html');
    });
});

module.exports = router;
