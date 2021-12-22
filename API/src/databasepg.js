//Tutorial: https://blog.logrocket.com/nodejs-expressjs-postgresql-crud-rest-api-example/
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'admin',
  port: 5433,
})


const getPersons = (request, response) => {
  pool.query('SELECT * FROM person ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//get a single person by id
const getPersonById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM person WHERE id = 1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//post a new person
const createPerson = (request, response) => {
  const { name, verslaving} = request.body

  pool.query('INSERT INTO person (name,verslaving) VALUES ($1, $2)', [name, verslaving], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Person added with ID: ${result.insertId}`)
  })
}

//updated data in an existing person
const updatePerson = (request, response) => {
  const id = parseInt(request.params.id)
  const { name} = request.body

  pool.query(
    'UPDATE person SET name = $1, WHERE id = $3',
    [name, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Person modified with ID: ${id}`)
    }
  )
}

//delete a person
const deletePerson = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM Persons WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Person deleted with ID: ${id}`)
  })
}

module.exports = {
  getPersons,
  getPersonById,
  createPerson,
  updatePerson,
  deletePerson,
}










