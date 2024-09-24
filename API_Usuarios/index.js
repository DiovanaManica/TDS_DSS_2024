const express = require('express');
const bodyParser = require("body-parser");
// baseUrl = http://localhost:8080/cadastro

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const clientes = [{
    id: 1,
    nome: "Diovana",
    email: "dhiovana.daldin@gmail.com",
    senha: "123456"
}];


app.post("/cadastro", (request, response) => {
    console.log(request.body.id);

    if(!request.body.id){
        return response.status(400).send("É obrigatorio enviar o campo id");
    }else if(!request.body.nome){
        return response.status(400).send("É obrigatorio enviar o campo nome");
    }else if(!request.body.email){
        return response.status(400).send("É obrigatorio enviar o campo email");
    }else if(!request.body.senha){
        return response.status(400).send("É obrigatorio enviar o campo senha");
    }
    

    //for (let i=0; i < clientes.length; i++){
      //  if (clientes[i].id == id){
        //    return response.status(404).send("O codigo ${id} ja esta em uso!")
        //}
    //}

    //clientes.filter((item)=>{
      //  if (item.id == id){
          //  return response.status(404).send(`O codigo ${id} ja esta em uso!`)
      //  }
   // });
   const existe_id = clientes.filter(item => item.id == id);
   if(existe_id){
    return response.status(404).send(`O codigo ${id} ja esta em uso!`)
   }else{
    clientes.push(request.body);
   }


    
   return response.status(200).send(clientes);

})

app.get("/consulta", (request, response) => {
    return response.status(200).send(clientes);
})

app.get("/cliente/:id([0-9]+)", (request, response) => {
    const {id} = request.params;
    const cliente = clientes.filter(item => item.id == id)

    return response.send(cliente);

})

app.delete("/cliente/:id([0-9])", (request, response)=>{
    const {id} = request.params,
})

app.listen(8080, () => {
    console.log("O servidor está rodando na porta 8080");
});

//criar um filtro que retorne o cliente com base no parametro desse codigo