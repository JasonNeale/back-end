exports.up = function(knex) {
    return knex.schema
    .createTable("members", member => {
		member.increments()
		member.string("username", 128).notNullable().unique()
        member.string("password").notNullable()
		member.string("first_name")
		member.string("last_name")
		member.string("email").unique()
		member.string("token")
	})
    .createTable("friends", friend => {
		friend.increments()
        friend.integer("follower").notNullable()
		friend.integer("following").notNullable().unsigned().references("id").inTable("members").onUpdate("CASCADE").onDelete("CASCADE")
    })
    .createTable("playlists", playlist => {
        playlist.increments()
        playlist.string("title").notNullable()
        playlist.integer("user_id").notNullable().unsigned().references("id").inTable("members").onUpdate("CASCADE").onDelete("CASCADE")
    })
    .createTable("playlist_songs", playlist_songs => {
		playlist_songs.increments()
        playlist_songs.integer("playlist_id").notNullable().unsigned().references("id").inTable("playlists").onUpdate("CASCADE").onDelete("CASCADE")
		playlist_songs.integer("song_id").notNullable().unsigned().references("id").inTable("songs")
    })
    .createTable("songs", song => {
		song.increments()
        song.string("title").notNullable()
        song.string("album").notNullable()
        song.string("artist").notNullable()
        song.string("image_url")
    })
}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("members")
    await knex.schema.dropTableIfExists("friends")
    await knex.schema.dropTableIfExists("playlists")
    await knex.schema.dropTableIfExists("playlist_songs")
    await knex.schema.dropTableIfExists("songs")
}