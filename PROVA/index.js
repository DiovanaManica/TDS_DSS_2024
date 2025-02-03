const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const autorRoutes = require('./routes/autor.router');
const livroRoutes = require('./routes/livro.router');

app.use('/api/autores', autorRoutes);
app.use('/api/livros', livroRoutes);


app.listen(8080, () => {
    console.log("O servidor está rodando na porta: 8080 🚀");
});