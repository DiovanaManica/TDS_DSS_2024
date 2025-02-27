const request = require('supertest');
const app = require('../server'); // Importando o servidor

describe('GET /estabelecimentos/api', () => {
  it('deve retornar os dados dos estabelecimentos', async () => {
    const response = await request(app).get('/estabelecimentos/api');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining([
      expect.objectContaining({
        nome: expect.any(String),
        endereco: expect.any(String),
        telefone: expect.any(String),
      })
    ]));
  });
});
