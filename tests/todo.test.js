const request = require('supertest');
const app = require('../src/app');

describe('POST /todo', () => {
    it('should return 201 and the created todo item', async () => {
        const response = await request(app)
            .post('/todo')
            .send({
                title: 'New Task',
                description: 'This is a new task.'
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('title', 'New Task');
        expect(response.body).toHaveProperty('description', 'This is a new task.');
    });
});


