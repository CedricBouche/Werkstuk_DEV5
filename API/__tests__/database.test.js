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

describe('testing postgres',() => {
  test ('post a new user' ,async (done)=>{
    try {
      let uuid = null;
      await request.post("/users")
      .send({name: 'test'})
      .expect(200)
      .then((resp) => resp.body.res)
      .then((res) => {
        uuid = res[0].uuid
      }).catch((e) => {
        console.log(e)
      })

      await pg.raw('name');
      pg.select('*').table("person").where({uuid}).then((rows) => {
        console.log(rows)
        expect(rows).toBeInstanceOf(Array);
        expect(rows.length).toBe(1);
      })
      .then(()=>{
        done();
      })
    } catch(err){
      throw err;
    } finally {
    }
  })
  
});