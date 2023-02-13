const express = require("express");
const confirmStrains = require("../confirmStrain")
const strains = express.Router();

const {
getAllStrains,
getOneStrain
} = require("../queries/strains");

strains.get("/", async (req, res) => {
try {
const allStrains = await getAllStrains();
res.status(200).json(allStrains);
} catch (error) {
res.status(500).json({ error: "An error occurred while retrieving the strains. Please try again later." });
}
});

strains.get("/:id", async (req, res) => {
try {
const { id } = req.params;
const strain = await getOneStrain(id);
if (strain) {
res.json(strain);
} else {
res.status(404).json({ error: "Strain not found." });
}
} catch (error) {
res.status(500).json({ error: "An error occurred while retrieving the strain. Please try again later." });
}
});

module.exports = strains;