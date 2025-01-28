const { response } = require("express");
const conn = require("../mysql.connection");

//CRUD
module.exports = ({
    inserir: (request, response)=>{
        response.status(200).send({msg:"Ola Mundo"});
    },
    consultar: (request, response)=>{},
    atualizar: (request, response)=>{},
    delete: (request, response)=>{}
})