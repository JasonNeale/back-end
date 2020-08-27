module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/spotify-SS.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'migrations',
    },
    seeds: {
      directory: './database/seeds'
    },
  },
  production: {
    client: 'postgresql',
    connection: {
      host: "ec2-54-224-124-241.compute-1.amazonaws.com",
      database: "d56gk5vr16pfic",
      port: "5432",
      user: "tsyxdscesuwdob",
      password: "e56b5ddb9b197e757029dcac45891d2e8e2e1e5fa1a2866b0734ed8f93db676b",
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'migrations',
    },
    seeds: {
      directory: './database/seeds'
    },
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './database/test.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'migrations',
    },
    seeds: {
      directory: './database/seeds'
    },
  },
}