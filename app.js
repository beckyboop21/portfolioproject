//Imports
const express = require("express")
const cors = require("cors")

// Configuration 
const app = express();

//Middleware 
app.use(express.json());
app.use(cors());
// app.use()


//strains Routes
const strainsController = require("./controllers/strainsControllers.js"); 
app.use ("/strains", strainsController); 



//Routes
app.get('/', (req, res) => {
    res.send("Welcome to the Cannatech App")
})

//404 page 
app.get("*", (req, res) => {
    res.status(404).send("Page not found")
})

//test

module.exports = app; 
