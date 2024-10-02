const AlunoModel = require('../models/AlunoModel');

const AlunoController = {
    listarTodos: (req, res) => {
        const alunos = AlunoModel.listarTodos();
        res.json(alunos);
    },

    buscarPorID: (req, res) => {
        const { id } = req.params;
        const aluno = AlunoModel.buscarPorID(id);
        if (aluno) {
            res.json(aluno);
        } else {
            res.status(404).send(`Aluno com ID ${id} não encontrado.`);
        }
    },

    cadastrar: (req, res) => {
        const { id, nome, idade } = req.body;
        const alunoExistente = AlunoModel.buscarPorID(id);
        if (alunoExistente) {
            res.status(400).send(`Aluno com ID ${id} já existe.`);
        } else {
            AlunoModel.cadastrar({ id, nome, idade });
            res.status(201).send(`Aluno com ID ${id} cadastrado com sucesso.`);
        }
    },

    atualizar: (req, res) => {
        const { id } = req.params;
        const { nome, idade } = req.body;
        const atualizado = AlunoModel.atualizar(id, { nome, idade });
        if (atualizado) {
            res.send(`Aluno com ID ${id} atualizado com sucesso.`);
        } else {
            res.status(404).send(`Aluno com ID ${id} não encontrado.`);
        }
    },

    deletar: (req, res) => {
        const { id } = req.params;
        const deletado = AlunoModel.deletar(id);
        if (deletado) {
            res.send(`Aluno com ID ${id} deletado com sucesso.`);
        } else {
            res.status(404).send(`Aluno com ID ${id} não encontrado.`);
        }
    }
};

module.exports = AlunoController;