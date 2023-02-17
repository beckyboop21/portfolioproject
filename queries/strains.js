const db = require("../db/dbConfig.js");

// ROUTES

// All - (app) routes 
const getAllStrains = async () => {
    console.log("queries")
try {
    
const allStrains = await db.any("SELECT * FROM strains");
console.log("allStrains", allStrains)
return allStrains;
} catch (error) {
return error;
}
};

// One (Show) Route
const getOneStrain = async (id) => {
try {
const oneStrain = await db.one("SELECT * FROM strains WHERE id=$1", id);
return oneStrain;
} catch (error) {
return error;
}
};

// CREATE - (New) route
const createStrain = async (strain) => {
try {
const createdOneStrain = await db.one(
"INSERT INTO strains (name, type, mood, is_avibe, image) VALUES($1, $2, $3, $4, $5) RETURNING *",
[strain.name, strain.type, strain.mood, strain.is_avibe, strain.image]
);
return createdOneStrain;
} catch (error) {
return error;
}
};

// DELETE
const deleteStrain = async (id) => {
try {
const deletedStrain = await db.one(
"DELETE FROM strains WHERE id=$1 RETURNING *",
id
);
return deletedStrain;
} catch (error) {
return error;
}
};

// UPDATE
const updateStrain = async (id, strain) => {
try {
const updatedStrain = await db.one(
"UPDATE strains SET name=$1, type=$2, mood=$3, image=$4, is_avibe=$5 WHERE id=$6 RETURNING *",
[strain.name, strain.type, strain.mood, strain.image, strain.is_avibe, id]
);
return updatedStrain;
} catch (error) {
return error;
}
};

module.exports = {
getAllStrains,
getOneStrain,
createStrain,
deleteStrain,
updateStrain,
};