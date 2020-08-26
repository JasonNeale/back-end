const db = require("../config/dbConfig")


async function add(playlist) {
  try {
    const [id] = await db("playlists").insert(playlist, "id")

    return findById(id)
  } catch (error) {
    throw error
  }
}

function findByUserId(user_id) {
  return db("playlists").where("user_id", user_id).select()
}

function findById(id) {
  return db("playlists").where("id", id).select()
}

function update(id, changes) {
  console.log('id: ', id)
  console.log('title: ', changes)

  return db('playlists').where({id}).update(changes)
}

function remove(id) {
  return db("playlists").where("id", id).del()
}


module.exports = {
  add,
  findByUserId,
  findById,
  update,
  remove
}