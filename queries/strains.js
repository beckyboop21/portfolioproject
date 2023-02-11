const db = require("../db/dbConfig.js")
// ROUTES

//All - (Index) route
const getAllStrains = async () => {
  try {
    const allStrains = await db.any("SELECT * FROM strains")
    return allStrains
  } catch (error) {
    return error
  }
}

// One (Show) Route
const getOneStrain = async (id) => {
  try {
    const oneStrains= await db.one("SELECT * FROM strain WHERE id=$1", id)
    return oneStrains
  } catch (error) {
    return error
  }
}

// CREATE - (New) route
const createStrain = async (strains) => {
  try {
    const createdOneStrain = await db.one(
      "INSERT INTO strains (name, type, mood, image) VALUES(1, 2, 3, 4) RETURNING *",
      [
        strains.name,
        strains.type,
        strains.mood,
        strains.image,
      ]
    )
    return createdOneStrain
  } catch (error) {
    return error
  }
}

// DELETE
const deleteStrain = async (id) => {
  try {
    const deletedStrain = await db.one(
      "DELETE FROM strains WHERE id=1 RETURNING *",
      id
    )
    return deletedStrain
  } catch (error) {
    return error
  }
}

// UPDATE
const updateStrain = async (id, strains) => {
  try {
    
    const updatedStrain = await db.one(
      "UPDATE strain SET name=1, type=2, mood=3, image=4 WHERE id=$5 RETURNING *",
      [
        strains.name,
        strains.type,
        strains.mood,
        strains.image,
        id,
      ]
    )
    return updatedStrain
  } catch (error) {
    return error
  }
}
//
module.exports = {
  getAllStrains,
  getOneStrain,
  createStrain,
  deleteStrain,
  updateStrain,
}
