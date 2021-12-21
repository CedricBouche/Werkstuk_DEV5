const express = require('express')
const app = express()
const port = 3000
const client = require("./databasepg");

app.use(express.json())
/**
 * [GET] /
 * checking if server is active
 * @returns {string} "Docker is working"
 */
app.get('/', (req, res) => {
  res.send('Docker is working!')
})


/**
 * [GET] /api/users
 * show a list of all the users from the database
 * @returns {object} "the object users"
 */
 app.get('/api/users',  (req, res) => {
  res.json(users);
})

app.post("/users",async(req,res)=>{
  try{
    const{name} = req.body;
    const newUser = await client.query("INSERT INTO users (Name) VALUES($1) RETURNING *",
    [name]
    );

    res.json(newUser);
  }catch(err){
    console.error(err.message);
  }
});

/**
 * [DELETE] /user
 * deletes one user based on id
 * @returns {string} 'User is deleted based on id'
 */
 app.delete('/api/users/:id', (req, res) => {
  res.send('User is deleted based on id')
})

/**
 * [PUT] /user
 * update one user based on id
 * @returns {string} 'User is changed based on id'
 */
 app.put('/api/users/:id', (req, res) => {
  res.send("User is changed based on id");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;