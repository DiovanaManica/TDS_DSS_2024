const express = require('express');
const router = express.Router();
const livroController = require('../controller/livro.controller');

router.get('/', livroController.consultarLivro);
router.post('/', livroController.registrarLivro);
router.put('/:id', livroController.atualizarLivro);
router.delete('/:id', livroController.deletarLivro);

module.exports = router;