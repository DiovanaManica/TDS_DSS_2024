const request = require('supertest');
const app = require('../server');

describe('Testes de Cadastro de Veículo e Agendamento', () => {
    test('Deve cadastrar um novo veículo', async () => {
        const res = await request(app)
            .post('/car/register')
            .send({
                userId: 1,
                modelo: 'Honda Civic',
                placa: 'ABC-1234',
                cor: 'Preto'
            });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('message', 'Veículo cadastrado com sucesso');
    });

    test('Deve agendar uma lavagem', async () => {
        const res = await request(app)
            .post('/car/agendar')
            .send({
                userId: 1,
                veiculoId: 1,
                tipoLavagem: 'Completa',
                data: '2025-02-20'
            });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('message', 'Agendamento realizado com sucesso');
    });
});
