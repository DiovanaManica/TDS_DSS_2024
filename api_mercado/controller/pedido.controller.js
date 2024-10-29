const conn = require("../mysql-connection");

//crud
module.exports = ({
    //cadastro: (req, res)=> {},
    consultar: async (req, res) => {},

        try{
            const data = await conn.raw("SELECT * FROM PRODUTO");
            return res.send (data[0]);
        } catch (erro){
            console.log(erro);
            return res.status(500).send ({ msg: "erro ao consultar os produtos!"});
        }

    //atualizar: (req, res)=>{},
    //delete: (req, res)=>{}
});

