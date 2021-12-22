const supertest = require('supertest');
const app = require("../src/server.js");
const request = supertest(app)


const pg = require('knex')({
  client: 'pg',
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'admin',
  port: 5433
});

describe('testing postgres', () => {
  test('full circle', async (done) =>{
    try {
      let uuid = null;
      await request.post('/persons')
        .send({ name: 'test', verslaving: 'testing' })
        .expect(200)
        .then((resp) => resp.body.res)
        .then((res) => {
          uuid = res[0].uuid
        }).catch((e) => {
          console.log(e)
        })
      await pg.raw('BEGIN');
      pg.select('*').table("persons").where({uuid}).then((rows) => {
        console.log(rows)
        expect(rows).toBeInstanceOf(Array);
        expect(rows.length).toBe(1);
      })
      .then(() => {
        done();
      })
    } catch(err) {
      throw err;
    } finally {
    }
  })
})