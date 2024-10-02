const express = require('express');
const TurmaController = require('../controllers/TurmaController');
const router = express.Router();

router.get('/turmas', TurmaController.listarTodos);
router.get('/turmas/:id', TurmaController.buscarPorID);
router.post('/turmas', TurmaController.cadastrar);
router.put('/turmas/:id', TurmaController.atualizar);
router.delete('/turmas/:id', TurmaController.deletar);

module.exports = router;