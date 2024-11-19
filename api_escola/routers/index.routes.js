const express = require("express");
const alunoRouter = require("./alunoRoutes");
const professorRouter = require("./professorRoutes");
const turmaRouter = require("./turmaRoutes");

const routes = express.Router();

routes.use("/aluno", alunoRouter);
routes.use("/professor", professorRouter);
routes.use("/turmas", turmaRouter);

module.exports = routes;