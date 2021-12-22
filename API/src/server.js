const express = require('express');
const app = express();
const port = 3000;
const db = require('./databasepg');

/**
 * [GET] /
 * checking if server is active
 * @returns {string} "Hello World"
 */
app.get('/',(request,response)=> {
  response.send('Hello World!')
})


/**
 * [GET] /
 * get all the persons in the database
 * @returns {object}
 */
app.get('/persons', db.getPersons)


/**
 * [GET] /
 * get one person in the database based on id
 * @returns {object}
 */
app.get('/persons/id', db.getPersonById)

/**
 * [POST] /
 * create one person in the database
 * @returns {object}
 */
app.post('/persons', db.createPerson)



/**
 * [PUT] /
 * update one person in the database based on id
 * @returns {object}
 */
app.put('/persons/:id', db.updatePerson)


/**
 * [DELETE] /
 * delete one person in the database based on id
 * @returns {object}
 */
app.delete('/persons/:id', db.deletePerson)



/**
 * checking if the server is active
 * @returns {string} "App listening on port 3000"
 */
app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});