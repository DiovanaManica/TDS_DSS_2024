const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Endpoints da API de Livros
router.get('/livros', bookController.getAllBooks);    // Listar livros
router.post('/livros', bookController.createBook);    // Criar livro
router.put('/livros/:id', bookController.updateBook); // Atualizar livro
router.delete('/livros/:id', bookController.deleteBook); // Excluir livro

module.exports = router;