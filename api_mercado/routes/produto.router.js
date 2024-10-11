const routes = require("express").Router();

//crud

routes.post("/",() => { });
routes.get("/", () => { });
routes.put("/:ra([0-9]+)", () => { });
routes.delete("/:ra([0-9]+)", () => { });

module.exports = routes;