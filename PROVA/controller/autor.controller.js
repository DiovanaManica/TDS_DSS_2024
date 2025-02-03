const db = require('../db-conn');

exports.consultar = (req, res) => {
    db.query('SELECT * FROM autores', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.registrar = (req, res) => {
    const { nome } = req.body;
    db.query('INSERT INTO autores (nome) VALUES (?)', [nome], (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId, nome });
    });
};

exports.atualizar = (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;
    db.query('UPDATE autores SET nome = ? WHERE id = ?', [nome, id], (err) => {
        if (err) throw err;
        res.json({ message: 'Autor atualizado com sucesso' });
    });
};

exports.deletar = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM autores WHERE id = ?', [id], (err) => {
        if (err) throw err;
        res.json({ message: 'Autor removido com sucesso' });
    });
};
