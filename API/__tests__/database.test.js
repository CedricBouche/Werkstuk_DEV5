const supertest = require('supertest');
const app = require("../src/index");


const pg = require('knex')({
  client: 'pg',
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'admin',
  port: 5433
});

const request = supertest(app);


describe('Post Endpoints', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/user')
      .send({
        name: 'test',
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('test')
  })
})

