const db = require("../config/dbConfig")


async function add(song) {
  try {
    const [id] = await db("songs").insert(song, "id")
    return findById(id)
  } catch (error) {
    throw error
  }
}

async function find() {
  return await db("songs").select()
}

function findBy(filter) {
  return db("songs").where(filter).select()
}

function findById(id) {
  return db("songs").where("id", id).select()
}

function update(id, changes) {
  return db('songs').where({ id }).update(changes)
}

function remove(id) {
  return db("songs").where("id", id).del()
}


module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove
}