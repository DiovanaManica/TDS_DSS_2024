const express = require("express").Router();
const clienteController = require("../controller.cliente.controller");
//crud

routes.post("/",() => { });
routes.get("/", () => { });
routes.put("/:ra([0-9]+)", () => { });
routes.delete("/:ra([0-9]+)", () => { });

module.exports = routes;