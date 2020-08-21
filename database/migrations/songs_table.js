exports.up = async function(knex) {
    await knex.schema.createTable("songs", song => {
		song.increments()
        song.string("title")
        .notNullable()
        song.string("album")
        .notNullable()
        song.string("artist")
        .notNullable()
        song.integer("playlist_id")
		.notNullable()
		.unsigned()
		.references("id")
		.inTable("playlists")
		.onUpdate("CASCADE")
		.onDelete("CASCADE")
    })
}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("songs")
}