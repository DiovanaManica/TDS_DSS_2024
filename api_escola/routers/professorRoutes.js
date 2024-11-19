const express = require("express");
const professorController = require("../controller/ProfessorController");

const routes = express.Router();

//CRUD
routes.post("/", professorController.cadastrar);
routes.get("/", professorController.consultar);
routes.put("/", professorController.atualizar);
routes.delete("/", professorController.deletar)

module.exports = routes;