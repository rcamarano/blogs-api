const { Category } = require('../models');

const createCat = ({ name }) => Category.create({ name });

const getAllCat = () => Category.findAll();

module.exports = {
  createCat,
  getAllCat,
};