const TurmaModel = require('../models/TurmaModel');

const TurmaController = {
    listarTodos: (req, res) => {
        const turmas = TurmaModel.listarTodos();
        res.json(turmas);
    },

    buscarPorID: (req, res) => {
        const { id } = req.params;
        const turma = TurmaModel.buscarPorID(id);
        if (turma) {
            res.json(turma);
        } else {
            res.status(404).send(`Turma com ID ${id} não encontrada.`);
        }
    },

    cadastrar: (req, res) => {
        const { id, nome, professor, alunos } = req.body;
        const turmaExistente = TurmaModel.buscarPorID(id);
        if (turmaExistente) {
            res.status(400).send(`Turma com ID ${id} já existe.`);
        } else {
            TurmaModel.cadastrar({ id, nome, professor, alunos });
            res.status(201).send(`Turma com ID ${id} cadastrada com sucesso.`);
        }
    },

    atualizar: (req, res) => {
        const { id } = req.params;
        const { nome, professor, alunos } = req.body;
        const atualizado = TurmaModel.atualizar(id, { nome, professor, alunos });
        if (atualizado) {
            res.send(`Turma com ID ${id} atualizada com sucesso.`);
        } else {
            res.status(404).send(`Turma com ID ${id} não encontrada.`);
        }
    },

    deletar: (req, res) => {
        const { id } = req.params;
        const deletado = TurmaModel.deletar(id);
        if (deletado) {
            res.send(`Turma com ID ${id} deletada com sucesso.`);
        } else {
            res.status(404).send(`Turma com ID ${id} não encontrada.`);
        }
    }
};

module.exports = TurmaController;