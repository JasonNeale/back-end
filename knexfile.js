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
      host: "ec2-3-208-50-226.compute-1.amazonaws.com",
      database: "d9thq6k5rdsd3f",
      port: "5432",
      user: "nxoriwdknzzvoa",
      password: "8c5651f068e52b6590e0c4823f8bd59f82484c29e6354696db0c054e7b9e9c75",
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