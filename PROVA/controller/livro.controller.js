const db = require('../db-conn');

exports.consultarLivro = (req, res) => {
    db.query('SELECT * FROM livros', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.registrarLivro = (req, res) => {
    const { titulo, autor_id } = req.body;
    db.query('INSERT INTO livros (titulo, autor_id) VALUES (?, ?)', [titulo, autor_id], (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId, titulo, autor_id });
    });
};

exports.atualizarLivro = (req, res) => {
    const { id } = req.params;
    const { titulo, autor_id } = req.body;
    db.query('UPDATE livros SET titulo = ?, autor_id = ? WHERE id = ?', [titulo, autor_id, id], (err) => {
        if (err) throw err;
        res.json({ message: 'Livro atualizado com sucesso' });
    });
};

exports.deletarLivro = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM livros WHERE id = ?', [id], (err) => {
        if (err) throw err;
        res.json({ message: 'Livro removido com sucesso' });
    });
};
