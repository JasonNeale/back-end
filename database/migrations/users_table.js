exports.up = async function(knex) {
    await knex.schema.createTable("users", user => {
		user.increments()
		user.string("first_name")
		user.string("last_name")
		user.string("email")
		.notNullable()
		.unique()
		user.integer("auth_id")
		.notNullable()
		.unsigned()
		.references("id")
		.inTable("auth")
		.onUpdate("CASCADE")
		.onDelete("CASCADE")
		user.string("token")
	})
}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("users")
}