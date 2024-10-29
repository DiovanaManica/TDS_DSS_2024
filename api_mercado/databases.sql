--Comandos DLL estrutura do banco de dados Mercado
--DBeaver / MariaDB / MySQL

CREATE DATABASE Mercado;

SHOW databases;
SHOW TABLES;

drop DATABASE Mercado;

USE Mercado;


CREATE TABLE Mercado.produto(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(9,2),
    status BOOLEAN DEFAULT TRUE
);


CREATE TABLE Mercado.cliente(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(20),
    status BOOLEAN DEFAULT TRUE
);

CREATE TABLE Mercado.pedido(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL, 
    FOREIGN KEY(id_cliente) REFERENCES cliente(id),
    id_produto INT NOT NULL, 
    FOREIGN KEY(id_produto) REFERENCES produto(id),
    quantidade INT,
    total DECIMAL(9,2)
); 


INSERT INTO mercado.cliente(nome, telefone)
VALUES("Marcos Renato", "46999298875");

SELECT * FROM cliente;