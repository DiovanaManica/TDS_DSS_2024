const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(bodyParser.json());

// Rotas de livros
app.use('/api', bookRoutes);

// Sincronizar modelo e iniciar o servidor
sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Servidor rodando em http://localhost:3000');
    });
}).catch(err => console.error('Erro ao sincronizar o banco de dados:', err));
