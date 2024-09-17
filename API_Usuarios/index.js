const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8080;


app.use(bodyParser.json());

// Armazena os usuários em memória
let usuarios = [];

// Endpoint POST para cadastro de usuário
app.post('/cadastro', (req, res) => {
    const { id, nome, email, senha } = req.body;

    // Verificar se o ID já existe
    const usuarioExistente = usuarios.find(usuario => usuario.id === id);
    if (usuarioExistente) {
        return res.status(400).json({ message: 'ID já cadastrado.' });
    }

    // Adicionar novo usuário ao array
    const novoUsuario = { id, nome, email, senha };
    usuarios.push(novoUsuario);

    res.status(201).json({ message: 'Usuário cadastrado com sucesso.', usuario: novoUsuario });
});

// Endpoint GET para consulta de todos os usuários
app.get('/consulta', (req, res) => {
    res.status(200).json(usuarios);
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

