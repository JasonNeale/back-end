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
      host: "ec2-34-238-26-109.compute-1.amazonaws.com",
      database: "d657adpq522u6o",
      port: "5432",
      user: "xkdvwlaaatecjp",
      password: "bc11c76c0727de2bd3e0f8f0b58c97a6d50cab50c7eb3683ba2897e71db5069f",
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