const Joi = require('joi');

const createCategorySchema = Joi.object({
  name: Joi.string().min(1).required(),
});

module.exports = createCategorySchema;