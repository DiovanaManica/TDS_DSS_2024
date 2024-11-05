const routes = require("express").Router();
const pedidoController = require("../controller/pedido.controller");


//CRUD
routes.post("/", pedidoController.cadastrar);
routes.get("/", () => { });
routes.put("/:id([0-9]+)", () => { });
routes.delete("/:id([0-9]+)", () => { });

module.exports = routes;