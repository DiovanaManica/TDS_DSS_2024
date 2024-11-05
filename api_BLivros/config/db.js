const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('biblioteca', 'seu_usuario', 'sua_senha', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.authenticate()
    .then(() => console.log('Conectado ao banco de dados com sucesso!'))
    .catch((err) => console.error('Erro ao conectar ao banco de dados:', err));

module.exports = sequelize;