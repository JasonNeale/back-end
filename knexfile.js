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
      host: "ec2-34-237-89-96.compute-1.amazonaws.com",
      database: "dcirbm11eve5t9",
      port: "5432",
      user: "tdgcqvipnqndxc",
      password: "a5624de157bad36299be84e125a251b28a1e09cb3b020cc3ed674112b32d2943",
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
  production2: {
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
}