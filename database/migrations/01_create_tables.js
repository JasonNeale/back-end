exports.up = function(knex) {
    return knex.schema
    .createTable("users", user => {
		user.increments()
		user.string("username").notNullable().unique()
        user.string("password").notNullable()
		user.string("first_name")
		user.string("last_name")
		user.string("email").unique()
		user.string("token")
	})
    .createTable("friends", friend => {
		friend.increments()
        friend.integer("follower").notNullable()
		friend.integer("following").notNullable().unsigned().references("id").inTable("users").onUpdate("CASCADE").onDelete("CASCADE")
    })
    .createTable("songs", song => {
		song.increments()
        song.string("title").notNullable()
        song.string("album").notNullable()
        song.string("artist").notNullable()
        song.string("spotify_id").notNullable()
        song.string("image_url")
    })
    .createTable("playlists", playlist => {
        playlist.increments()
        playlist.string("title").notNullable()
        playlist.integer("user_id").notNullable().unsigned().references("id").inTable("users").onUpdate("CASCADE").onDelete("CASCADE")
    })
    .createTable("playlist_songs", playlist_songs => {
		playlist_songs.increments()
        playlist_songs.integer("playlist_id").notNullable().unsigned().references("id").inTable("playlists").onUpdate("CASCADE").onDelete("CASCADE")
		playlist_songs.integer("song_id").notNullable().unsigned().references("id").inTable("songs")
    })
}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("playlist_songs")
    await knex.schema.dropTableIfExists("playlists")
    await knex.schema.dropTableIfExists("songs")
    await knex.schema.dropTableIfExists("friends")
    await knex.schema.dropTableIfExists("users")
}