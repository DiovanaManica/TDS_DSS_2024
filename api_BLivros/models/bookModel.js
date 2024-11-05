const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Book = sequelize.define('Book', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            max: new Date().getFullYear(),  // Ano não pode ser no futuro
        },
    },
    pages: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 10,  // Pelo menos 10 páginas
        },
    },
});

module.exports = Book;
