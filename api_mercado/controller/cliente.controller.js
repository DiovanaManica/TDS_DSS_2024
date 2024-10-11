const conn = require ("../mysql-connection");


module.exports = ({
    cadastro: (req, res)=> {},
    consultar: (req, res)=>{
        conn.raw("SELECT * FROM cliente").then((data)=> {
            res.send(data[0]);
        }).catch((erro)=>{
            res.send("Erro ao consultar os clientes!");
        });
    },
    atualizar: (req, res)=>{},
    delete: (req, res)=>{}
});


