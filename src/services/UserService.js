const { User } = require('../models');

const create = ({ displayName, email, password, image }) => User.create(
  {
    displayName,
    password,
    email,
    image,
  },
);

const getByEmail = (email) => User.findOne({ where: { email } });

const getUserById = (id) => User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
const getAllUsers = () => User.findAll({ attributes: { exclude: ['password'] } });

module.exports = {
  getByEmail,
  create,
  getUserById,
  getAllUsers,
};