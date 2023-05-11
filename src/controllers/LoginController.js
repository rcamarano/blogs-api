const loginService = require('../services/LoginService');

const { createToken } = require('../auth/authFunctions');

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = (await loginService.getByEmail(email));

  if (!user || user.dataValues.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const { id } = user.dataValues;
  const token = createToken({ id, email });

  return res.status(200).json({ token });
};

module.exports = {
  login,
};