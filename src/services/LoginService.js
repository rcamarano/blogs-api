const { User } = require('../models');

const getByEmail = (email) => {
  console.log('email', email);
  return User.findOne({ where: { email } });
};

module.exports = {
  getByEmail,
};