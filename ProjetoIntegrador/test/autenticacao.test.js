const request = require('supertest');
const app = require('../server'); // Importa o servidor principal

describe('Testes de Autenticação', () => {
    test('Deve registrar um novo usuário', async () => {
        const res = await request(app)
            .post('/auth/register')
            .send({
                name: 'Usuário Teste',
                email: 'teste@example.com',
                password: '123456'
            });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('message', 'Usuário registrado com sucesso');
    });

    test('Deve fazer login com usuário válido', async () => {
        const res = await request(app)
            .post('/auth/login')
            .send({
                email: 'teste@example.com',
                password: '123456'
            });
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('token');
    });

    test('Deve rejeitar login com credenciais erradas', async () => {
        const res = await request(app)
            .post('/auth/login')
            .send({
                email: 'teste@example.com',
                password: 'senhaerrada'
            });
        expect(res.statusCode).toBe(401);
        expect(res.body).toHaveProperty('error', 'Credenciais inválidas');
    });
});
