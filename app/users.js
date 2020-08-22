const db = require("../config/dbConfig")

function find() {
  return db("members").select("id", "username")
}

function findBy(filter) {
  return db("members").where(filter)
}

async function add(user) {
  try {
    const [id] = await db("members").insert(user, "id")

    return findById(id)
  } catch (error) {
    throw error
  }
}

function findById(id) {
  return db("members")
    .where({ id })
    .first()
}

function updateUser(changes, id) {
  return db('members').where({ id }).update(changes)
}

module.exports = {
  add,
  find,
  findBy,
  findById,
  updateUser
}