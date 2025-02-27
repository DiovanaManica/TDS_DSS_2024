const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const autenticacaoRoutes = require('./routes/autenticacaoRoutes');
const veiculosRoutes = require('./routes/veiculosRoutes');
const estabelecimentoRoutes = require('./routes/estabelecimentoRoutes'); // Rota de estabelecimentos
require('./models/database'); // Conecta ao banco de dados

const app = express();

// Configuração do EJS como motor de templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Arquivos estáticos, como imagens, CSS e JS

// Definindo as rotas
app.use('/autenticacao', autenticacaoRoutes);           // Rota de autenticação
app.use('/veiculos', veiculosRoutes);             // Rota de cadastro de veículos e agendamentos
app.use('/estabelecimentos', estabelecimentoRoutes); // Rota de estabelecimentos

// Página principal (login)
app.get('/', (req, res) => {
    res.render('login');  // Usando EJS para renderizar a página de login
});

// Iniciar o servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
