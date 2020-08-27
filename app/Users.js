const db = require("../config/dbConfig")


async function add(credentials) {
  console.log('User.Add - credentials: ', credentials)
  try {
    const [id] = await db("users").insert({username: credentials.username, password: credentials.password}, "id")
    console.log('User.Add - [id]: ', id)
    const result = findById(id)
    console.log('User.Add - result: ', result)
    return result
  } catch (error) {
    throw error
  }
}

async function addFriendship(friendship) {
  try {
    const [id] = await db("friends").insert(friendship, "id")

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

async function findById(id) {
  return await db("users").where("id", id).select()
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
