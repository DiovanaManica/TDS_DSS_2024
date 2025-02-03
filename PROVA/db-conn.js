const knex = require("knex");

module.exports = knex({
    client:"mysql2",
    connection: {
        host:"localhost",
        port:8745,
        user: "root",
        password: "",
        database: "registro"
    }
});