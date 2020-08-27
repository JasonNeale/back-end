const db = require("../config/dbConfig")


function findByPlaylistId(playlist_id) {
  return db("playlist_songs").where({ playlist_id })
}

async function add(playlist_id, song_id) {
  try {
    const [id] = await db("playlist_songs").insert({playlist_id: playlist_id, song_id: song_id}, "id")

    return findByPlaylistId(playlist_id)
  } catch (error) {
    throw error
  }
}

function update(id, changes) {
  return db('playlist_songs').where({ id }).update(changes)
}

function remove(id) {
  return db("playlist_songs").where("id", id).del()
}


module.exports = {
  add,
  findByPlaylistId,
  update,
  remove
}