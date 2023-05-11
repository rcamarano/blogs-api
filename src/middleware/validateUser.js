const newUser = require('../schemas/NewUserSchema');

const userValidation = (req, res, next) => {
  const validation = newUser.validate(req.body, { convert: false });

  if (validation.error) {
    return res.status(400).json({ message: validation.error.details[0].message }); 
  }

  next();
};

module.exports = userValidation; 