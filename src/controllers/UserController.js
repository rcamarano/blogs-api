const userService = require('../services/UserService');
const { createToken, decodeToken } = require('../auth/authFunctions');

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

const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = (await userService.getUserById(id));

  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  return res.status(200).json(user);
};

const getAllUsers = async (_req, res) => {
  const users = (await userService.getAllUsers());

  return res.status(200).json(users);
};

const deleteUser = async (req, res) => {
  const userId = decodeToken(req.headers.authorization).payload.data.id;

  await userService.deleteUser(userId);

  return res.status(204).end();
};

module.exports = {
  create,
  getUserById,
  getAllUsers,
  deleteUser,
}; 