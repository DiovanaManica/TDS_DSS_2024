const express = require("express");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index.routes");

const app = express();

app.use(bodyParser.json());


app.listen(8080, () => {
    console.log('O servidor está rodando na porta 8080! 😎');
});