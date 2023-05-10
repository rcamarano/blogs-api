const bcrypt = require('bcryptjs');
const { User } = require('../models');

const createUser = ({ username, password }) => {
  const salt = bcrypt.genSaltSync(5);
  const hashPassword = bcrypt.hashSync(password, salt);
  return User.create({ username, password: hashPassword });
};

// password ovelhanegra
// salt $2a$05$sZJremQ2osAMFduiQY/CrO
// hashPassword $2a$05$sZJremQ2osAMFduiQY/CrOqaG9uLT/5EOiEyelptF5u7M2MJfDjKm

const getUsers = () => User.findAll();

const getByUsername = (username) => User.findOne({ where: { username } });

const getByUserId = (userId) => User.findByPk(userId);

module.exports = {
  createUser,
  getUsers,
  getByUsername,
  getByUserId,
};
