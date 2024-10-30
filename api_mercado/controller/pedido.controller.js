const conn = require("../mysql-connection");

module.exports = ({
    cadastro: (req, res) => {
        const { nome, preco } = req.body;

        let comando = ``;

        if (!preco) {
            comando = `INSERT INTO PRODUTO(nome, preco) VALUES('${nome}', null)`;
        } else {
            comando = `INSERT INTO PRODUTO(nome, preco) VALUES('${nome}', '${preco}')`;
        }

        conn.raw(comando)
            .then(() => {
                res.status(200).send({ msg: "Produto cadastrado com sucesso!" });
            })
            .catch((error) => {
                console.error(error);
                res.status(500).send("Erro ao cadastrar um produto!");
            });
    },
    
    consultar: (req, res) => {
        conn.raw("SELECT * FROM PRODUTO").then((data) => {
            res.status(200).send(data[0]);
        }).catch((erro) => {
            console.error(erro);
            res.status(500).send("Erro ao consultar os produtos!");
        });
    },
    
    atualizar: (req, res) => {
        const { id, nome, preco, status } = req.body;

        conn.raw(`UPDATE PRODUTO SET nome='${nome}', 
            preco='${preco}', 
            status=${status} WHERE id = ${id}`)
            .then(() => {
                res.status(200).send({ msg: "Produto atualizado com sucesso!" });
            }).catch((error) => {
                console.error(error);
                res.status(500).send({ msg: "Erro ao atualizar o produto!" });
            });
    },
    
    deletar: (req, res) => {
        const { id } = req.params;

        conn.raw(`DELETE FROM PRODUTO WHERE id = ${id}`).then((data) => {
            if (data[0].affectedRows === 0) {
                return res.status(404).send({ msg: "Nenhum produto encontrado com esse código!" });
            } else {
                return res.status(200).send({ msg: "Produto deletado com sucesso!" });
            }
        }).catch((error) => {
            console.error(error);
            return res.status(500).send({ msg: "Erro ao deletar o produto!" });
        });
    },
    
    buscaPorId: (req, res) => {
        const { id } = req.params;

        conn.raw(`SELECT * FROM PRODUTO WHERE id = ${id}`).then((data) => {
            res.status(200).send(data[0]);
        }).catch((error) => {
            console.error(error);
            res.status(500).send("Erro ao consultar o produto!");
        });
    }
});