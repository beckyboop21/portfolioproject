//Imports
const express = require("express")
const app = express();
const cors = require("cors")
const strainController = require("./controllers/strainController")

// Configuration 


//Middleware 
app.use(express.json());
app.use(cors());
app.use("/strains", strainController)


app.get("/", (req, res) => {
    res.send("Welcome to the CannaTech App")
  })
  
  // 404 page
  app.get("*", (req, res) => {
    res.status(404).send("Page not found")
  })
  
  //test

  module.exports = app









