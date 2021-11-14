// Update with your config settings.

module.exports = {


  development: {
    client: 'pg',
    connection: {
      database: 'werkstukDev5',
      user:     'username',
      password: null,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
    }
  },
};
