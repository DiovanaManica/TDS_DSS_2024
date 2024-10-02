const express = require('express');
const ProfessorController = require('../controllers/ProfessorController');
const router = express.Router();

router.get('/professores', ProfessorController.listarTodos);
router.get('/professores/:id', ProfessorController.buscarPorID);
router.post('/professores', ProfessorController.cadastrar);
router.put('/professores/:id', ProfessorController.atualizar);
router.delete('/professores/:id', ProfessorController.deletar);

module.exports = router;