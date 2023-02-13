const confirmStrain = (req, res, next) => {
  //   const { strain, mood, type } = req.body
  //I need a variable where i will store a boolean after I check the strain, mood, type
  // check strain, mood, type
  let strain = req.body.strain
  let mood = req.body.mood
  let type = req.body.type

  //set up a conditional to set the is_avibe variable to true or false based on strain, mood, and type
  // Set the is_avibe variable based on strain, mood, and type
  let is_avibe = false
  if (strain && mood && type) {
    if (strain >= 5 && mood >= 5 && type <= 5) {
      is_avibe = true
    }
    // I need to store the req.body and the new variable into a new object to send to the db
    // Store the req.body and the is_avibe variable in a new object
    const newBody = { ...req.body, is_avibe: is_avibe }

    // send the newbody object to the database
    res.status(200).json(newBody)
  } else {
    res.status(400).json({ error: "Strain not a vibe" })
  }
}

module.exports = confirmStrain
