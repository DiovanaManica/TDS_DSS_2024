const express = require('express');
const router = express.Router();
const autorController = require('../controller/autor.controller');

router.get('/', autorController.consultar);
router.post('/', autorController.registrar);
router.put('/:id', autorController.atualizar);
router.delete('/:id', autorController.deletar);

module.exports = router;