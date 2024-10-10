const routes = require ("express").Router();
const clienteRouter = requirec("../cliente.router");
const produtoRouter = requirec("../produto.router");
const pedidoRouter = requirec("../pedido.router");

routes.use("/cliente", clienteRouter);
routes.use("/produto", clienteRouter);
routes.use("/pedido", clienteRouter);

module.exports = routes;
