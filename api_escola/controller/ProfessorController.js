const ProfessorModel = require('../models/ProfessorModel');

const ProfessorController = {
    listarTodos: (req, res) => {
        const professores = ProfessorModel.listarTodos();
        res.json(professores);
    },

    buscarPorID: (req, res) => {
        const { id } = req.params;
        const professor = ProfessorModel.buscarPorID(id);
        if (professor) {
            res.json(professor);
        } else {
            res.status(404).send(`Professor com ID ${id} não encontrado.`);
        }
    },

    cadastrar: (req, res) => {
        const { id, nome, materia } = req.body;
        const professorExistente = ProfessorModel.buscarPorID(id);
        if (professorExistente) {
            res.status(400).send(`Professor com ID ${id} já existe.`);
        } else {
            ProfessorModel.cadastrar({ id, nome, materia });
            res.status(201).send(`Professor com ID ${id} cadastrado com sucesso.`);
        }
    },

    atualizar: (req, res) => {
        const { id } = req.params;
        const { nome, materia } = req.body;
        const atualizado = ProfessorModel.atualizar(id, { nome, materia });
        if (atualizado) {
            res.send(`Professor com ID ${id} atualizado com sucesso.`);
        } else {
            res.status(404).send(`Professor com ID ${id} não encontrado.`);
        }
    },

    deletar: (req, res) => {
        const { id } = req.params;
        const deletado = ProfessorModel.deletar(id);
        if (deletado) {
            res.send(`Professor com ID ${id} deletado com sucesso.`);
        } else {
            res.status(404).send(`Professor com ID ${id} não encontrado.`);
        }
    }
};

module.exports = ProfessorController;