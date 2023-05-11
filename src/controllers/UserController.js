const userService = require('../services/UserService');
const { createToken } = require('../auth/authFunctions');

const create = async (req, res) => {
  const { email } = req.body;

  const user = (await userService.getByEmail(email));

  if (user) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const newUser = (await userService.create(req.body));

  const { id } = newUser.dataValues;
  const token = createToken({ id, email });

  return res.status(201).json({ token });
};

module.exports = {
  create,
}; 