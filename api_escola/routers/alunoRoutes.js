const express = require('express');
const AlunoController = require('../controllers/AlunoController');
const router = express.Router();

router.get('/alunos', AlunoController.listarTodos);
router.get('/alunos/:id', AlunoController.buscarPorID);
router.post('/alunos', AlunoController.cadastrar);
router.put('/alunos/:id', AlunoController.atualizar);
router.delete('/alunos/:id', AlunoController.deletar);

module.exports = router;
