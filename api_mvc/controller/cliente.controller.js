
const clientes = [];


//const atualizar =(req, res) => {};
//const deletar =(req, res) => {};
//const consulta =(req, res) => {};
//const consultaPorID =(req, res) => {};

module.exports = ({
    atualizar: (req, res)=>{
        const { id, nome, email, senha } = req.body;

    console.log(req.body);

    clientes.push({
        id, nome, email, senha
    })

    res.send(req.body);
    },

    deletar : (req, res)=>{
        res.send(deletar);
    },
    consulta: (req, res)=>{
        res.send(consulta);
    },
    consultaPorID: (req, res)=>{
        res.send(consultaPorID);
    }
  //  novaFuncao: (req, res)=>{      //exemplo de como incluir uma nova função 

   // }
});