const app = require("../index");
const supertest = require('supertest');
const req = supertest(app);

test('helper function to check the GET endpoint', async () =>{
  await req.get("/").expect("Hello").toEqual("Hello");
});

test('helper function to check the DELETE endpoint', async () =>{
  await req.delete("/").expect("deleted").toEqual("deleted");
});

test('helper function to check the PATCH endpoint', async () =>{
  await req.patch("/").expect("updated").toEqual("updated");
});