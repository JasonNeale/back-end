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
      host: "ec2-54-91-178-234.compute-1.amazonaws.com",
      database: "dbac5i9gi4gnot",
      port: "5432",
      user: "gjakgszayzrvdh",
      password: "eb2afae5c6aa1830bfee6c2a0ea1262e58bdab15b8fea25777e380b568c00659",
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