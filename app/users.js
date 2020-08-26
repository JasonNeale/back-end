const db = require("../config/dbConfig")


async function add(user) {
  try {
    const [id] = await db("members").insert(user, "id")

    return findById(id)
  } catch (error) {
    throw error
  }
}

async function addFriendship(friendship) {
  try {
    const [id] = await db("friends").insert({friendship})

    return findById(id)
  } catch (error) {
    throw error
  }
}

function find() {
  return db("members").select("id", "username")
}

function findBy(filter) {
  return db("members").where(filter).select()
}

function findById(id) {
  return db("members").where("id", id).select()
}

function findFollowersById(id) {
  return db("friends").where("follower", id).select()
}

function findFollowingById(id) {
  return db("friends").where("following", id).select()
}

function update(id, changes) {
  return db('members').where({ id }).update(changes)
}

function remove(id) {
  return db("members").where("id", id).del()
}


module.exports = {
  add,
  addFriendship,
  find,
  findBy,
  findById,
  findFollowersById,
  findFollowingById,
  update,
  remove
}