const checkName = (req, res, next) => {
    if (req.body.name) {
     
      next()
    } else {
      res.status(400).json({ error: "Name is required" })
    }
  }
  
  const checkBoolean = (req, res, next) => {
    if (
      req.body.is_avibe === true ||
      req.body.is_avibe === false ||
      req.body.is_avibe === undefined
    ) {
      next()
    } else {
      res.status(400).json({ error: "is_avibe must have a boolean value" })
    }
  }
  
  const validateAndSetImage = (req, res, next) => {
    let image = req.body.image
    if (!image) {
      image = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"
    } else {
      if (
        req.body.image.substring(0, 7) !== "https://" &&
        req.body.image.substring(0, 8) !== "https://"
      ) {
        res.status(400).json({ error: "Image must have a https:// URL " })
      }
    }
    req.body.image = image
    next()
  }
  module.exports = { checkName, checkBoolean, validateAndSetImage }
  
  const validateURL = (req, res, next) => {
    console.log("This function runs on the POST bookmark");
    next();
  };
  
  module.exports = { validateURL };
  