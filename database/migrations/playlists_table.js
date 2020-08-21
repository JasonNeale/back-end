exports.up = async function(knex) {
    await knex.schema.createTable("playlists", playlist => {
        playlist.increments()
        playlist.string("title")
        .notNullable()
        playlist.integer("user_id")
		.notNullable()
		.unsigned()
		.references("id")
		.inTable("users")
		.onUpdate("CASCADE")
		.onDelete("CASCADE")
    })
}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("playlists")
}