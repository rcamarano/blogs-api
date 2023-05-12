const { createCategory } = require('../schemas');

const categoryValidation = (req, res, next) => {
  const validation = createCategory.validate(req.body, { convert: false });

  if (validation.error) {
    return res.status(400).json({ message: validation.error.details[0].message }); 
  }

  next();
};

module.exports = categoryValidation;