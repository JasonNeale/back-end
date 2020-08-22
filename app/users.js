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
  return db("members").where({ id }).first()
}

function findFollowersById(id) {
  return db("friends").where("follower", id)
}

function findFollowingById(id) {
  return db("friends").where("following", id)
}

function update(id, changes) {
  return db('members').where({ id }).update(changes)
}

function remove(id) {
  return db("members").where("id", id).del()
}


module.exports = {
  add,
  find,
  findBy,
  findById,
  findFollowersById,
  findFollowingById,
  update,
  remove
}