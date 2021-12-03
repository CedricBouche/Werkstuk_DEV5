const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'admin',
  port: 5433,
})


client.connect()
.then(()=> console.log("Connected!"))
.then(()=> client.query("SELECT * from users")
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(()=>client.end())
)

