const express = require("express").Router();
const clienteController = require("../controller.cliente.controller");
//crud

routes.post("/", clienteController.cadastro);
routes.get("/", clienteController.consultar);
routes.put("/:ra([0-9]+)", clienteController.atualizar);
routes.delete("/:ra([0-9]+)", clienteController.deletar);

module.exports = routes;