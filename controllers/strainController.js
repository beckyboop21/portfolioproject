const express = require("express");
// const request = require('request');
const confirmStrains = require("../confirmStrain");
const {
  getAllStrains,
  getOneStrain,
  createStrain,
  deleteStrain,
  updateStrain,
} = require("../queries/strains");
const {
  checkName,
  checkBoolean,
  validateAndSetImage,
} = require("../validations/checkStrains");

const strains = express.Router();

strains.get("/", async (req, res) => {
  try {
    const allStrains = await getAllStrains();
    if (allStrains.length > 0) {
      console.log("hi, allStrains");
      res.status(200).json(allStrains);
    } else {
      res.status(404).json({ error: "No strains found." });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred while retrieving the strains. Please try again later." });
  }
});

strains.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const strain = await getOneStrain(id);
    if (!strain.message) {
      res.json(strain);
    } else {
      res.status(404).json({ error: "Strain not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred while retrieving the strain. Please try again later." });
  }
});

strains.post("/", async (req, res) => {
  try {
    const copy = { ...req.body };
    const updatedStrains2 = req.body.name.trim()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    copy.name = updatedStrains2;
    const strain = await createStrain(copy);
    res.status(200).json(strain);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Strain is not a vibe" });
  }
});

strains.delete("/:index", (req, res) => {
  const deletedStrains = deleteStrain(req.params.index)
  res.status(200).json(deletedStrains);
});

strains.put("/:index", async (req, res) => {
  const { index } = req.params;
 const updatedStrain =  await updateStrain(index,req.body)
 res.status(200).json(updatedStrain);
    
});


module.exports = strains;
