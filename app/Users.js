const db = require("../config/dbConfig")


async function add(credentials) {
  // try {
  //   const [id] = await db("users").insert(credentials)

  //   return findById(id)
  // } catch (error) {
  //   throw error
  // }

  const [id] = await db("users").insert(credentials)
  return id
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
  return db("users").select("id", "username")
}

function findBy(filter) {
  return db("users").where(filter).select()
}

function findById(id) {
  return db("users").where("id", id).select()
}

function findFollowersById(id) {
  return db("friends").where("follower", id).select()
}

function findFollowingById(id) {
  return db("friends").where("following", id).select()
}

function update(id, changes) {
  return db('users').where("id", id).update({changes})
}

function remove(id) {
  return db("users").where("id", id).del()
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
