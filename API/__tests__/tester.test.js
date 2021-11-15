const app = require("../src/index");
const request = require('supertest');



it('tests if connection to endpoint is good', async() => {
    const response = await request(app).get('/');
    expect(response.statusCode).toEqual(200);
    expect(response.body.status).toBe("success");
});