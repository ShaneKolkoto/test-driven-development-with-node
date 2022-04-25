const creds = require('./config/creds');

module.exports = {
  test: {
    client: 'pg',
    connection: {
      database: creds.DB_NAME_TEST,
      user:     creds.DB_USER,
      password: creds.DB_PASS,
      host: creds.DB_HOST,
      port: creds.DB_PORT
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/test'
    }
  },
  development: {
    client: 'pg',
    connection: {
      database: creds.DB_NAME_DEV,
      user:     creds.DB_USER,
      password: creds.DB_PASS,
      host: creds.DB_HOST,
      port: creds.DB_PORT
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/production'
    }
  }
};