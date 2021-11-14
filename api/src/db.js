const knex = require('knex')({
  client: 'pg',
  connection: process.env.POSTGRES_CONNECTION 
});

class Database {

  /**
   * 
   * @returns {boolean} checks if the table is created (true) or not (false)
   */

  async createUserTabel(){
    if(!(await this.doesTableExist("users"))){
      await knex.schema.createTable("users",(table) =>{
        table.increments("USER_ID");
        table.string("username");
        table.string("password");
        table.string("email");
        table.string("addiction");
      });
      return true;
    } else {
      return false;
    }
  }
}

module.exports = {Database};