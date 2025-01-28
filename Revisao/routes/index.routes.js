const express = require("express");
const pessoaRoute = require(".pessoa.route")

const routes = express.Router();

routes.use("/pessoa", pessoaRouteRouter);


module.exports = routes;