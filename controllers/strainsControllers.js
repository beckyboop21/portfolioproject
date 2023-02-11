const express = require("express");
const strains = express.Router();

//Index 
strains.get("/", (req, res) => {
    res.json({status: "ok"});
});


module.exports = strains; 