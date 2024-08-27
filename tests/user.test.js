const request = require('supertest');
const app = require('../src/app');

describe('POST /register', () => {
    it('should return 201 and the created user', async () => {
        const response = await request(app)
            .post('/register')
            .send({
                name: 'Test User',
                username: 'testuser',
                email: 'testuser@example.com',
                password: 'password123',
                address: '123 Test Street',
                phoneNumber: '1234567890'
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('name', 'Test User');
        expect(response.body).toHaveProperty('email', 'testuser@example.com');
    });
});

