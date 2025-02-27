const express = require('express');
const router = express.Router();

// Exemplo de dados dos estabelecimentos (simulando o banco de dados)
const estabelecimentos = [
  { id: 1, nome: 'Lavacar Centro', endereco: 'Rua A, 123', telefone: '(11) 99999-0000' },
  { id: 2, nome: 'Lavacar Zona Sul', endereco: 'Rua B, 456', telefone: '(11) 98888-1111' },
  { id: 3, nome: 'Lavacar Norte', endereco: 'Rua C, 789', telefone: '(11) 97777-2222' },
];

// Rota para renderizar a página de Estabelecimentos
router.get('/', (req, res) => {
  res.render('estabelecimentos'); // Renderiza a página HTML
});

// Rota para buscar os dados dos estabelecimentos
router.get('/api', (req, res) => {
  res.json(estabelecimentos); // Retorna os dados dos estabelecimentos em formato JSON
});

module.exports = router;
