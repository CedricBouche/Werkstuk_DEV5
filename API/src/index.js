const express = require('express')
const app = express()
const port = 3000

/**
 * [GET] /
 * @returns {string} "Docker is working"
 */
app.get('/', (req, res) => {
  res.send('Docker is working!')
})


/**
 * [GET] /api/users
 * show a list of all the users from the database
 * @returns {json} "Docker is working"
 */
 app.get('/api/users',  (req, res) => {
  res.json(users);
})

/**
 * [delete] /user
 * deletes one user based on id
 * @argument {id}
 * @returns deleted user
 */
 app.delete('/api/users/:id', (req, res) => {
  res.send('User is deleted based on id')
})

/**
    * updates one user based on id
    * @argument {id} 
    * @returns changed user
    */
 app.put('/api/users/:id', (req, res) => {
  res.send("User is changed based on id");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
