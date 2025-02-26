const mysql = require('mysql2');

// Configuração da conexão com o MySQL
const db = mysql.createConnection({
    host: 'localhost', // Ajuste conforme necessário
    port: 8745,
    user: "root", // usuário do MySQL
    password: '', // senha do MySQL
    database: 'Lavacar' // Nome do banco de dados
});

// Conectar ao banco de dados
db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL');

    // Criar tabelas se não existirem
    db.query(`CREATE TABLE IF NOT EXISTS USUARIOS (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255) UNIQUE,
        password VARCHAR(255)
    )`, (err) => {
        if (err) console.error('Erro ao criar tabela usuarios:', err);
    });

    db.query(`CREATE TABLE IF NOT EXISTS VEICULOS (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        model VARCHAR(255),
        plate VARCHAR(50),
        FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    )`, (err) => {
        if (err) console.error('Erro ao criar tabela veiculos:', err);
    });

    db.query(`CREATE TABLE IF NOT EXISTS HORARIOS (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        vehicle_id INT,
        date DATE,
        time TIME,
        type VARCHAR(100),
        FOREIGN KEY(user_id) REFERENCES usuarios(id) ON DELETE CASCADE,
        FOREIGN KEY(vehicle_id) REFERENCES veiculos(id) ON DELETE CASCADE
    )`, (err) => {
        if (err) console.error('Erro ao criar tabela horarios:', err);
    });
});

module.exports = db;
