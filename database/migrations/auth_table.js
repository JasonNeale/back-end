exports.up = async function(knex) {
    await knex.schema.createTable("auth", auth => {
        auth.increments()
        auth
        .string("username", 128)
        .notNullable()
        .unique()
        auth.string("password")
        .notNullable()
    })
}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("auth")
}