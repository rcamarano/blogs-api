const categoryService = require('../services/CategoryService');

const createCat = async (req, res) => {
  const { name } = req.body;

  const newCategory = (await categoryService.createCat({ name }));

  return res.status(201).json({ ...newCategory.dataValues });
};

const getAllCat = async (_req, res) => {
  const categories = (await categoryService.getAllCat());

  return res.status(200).json(categories);
};

module.exports = {
  createCat,
  getAllCat,
};