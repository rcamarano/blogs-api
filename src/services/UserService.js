const User = require('../models/User');

const create = ({ displayName, email, password, image }) => User.create(
  {
    displayName,
    password,
    email,
    image,
  },
);

const getByEmail = (email) => User.findOne({ where: { email } });

module.exports = {
  getByEmail,
  create,
};