exports.up = async function(knex) {
    await knex.schema.createTable("friends", friend => {
		friend.increments()
        user.integer("follower")
        .notNullable()
		user.integer("following")
		.notNullable()
		.unsigned()
		.references("id")
		.inTable("users")
		.onUpdate("CASCADE")
		.onDelete("CASCADE")
		user.string("token")
	})
}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("users")
}