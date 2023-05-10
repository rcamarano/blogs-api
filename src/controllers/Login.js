const bcrypt = require('bcryptjs');

const { UserService } = require('../services/UserService');
const { createToken } = require('../auth/authFunctions');

const isBodyValid = (username, password) => username && password;

module.exports = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!isBodyValid(username, password)) {
            return res.status(401)
                .json({ message: 'É necessário usuário e senha para fazer login' });
        }
        const user = await UserService.getByUsername(username);
        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(401)
                .json({ message: 'Usuário não existe ou senha inválida' });
        }
        const { password: _password, ...userWithoutPassord } = user.dataValues;
        const token = createToken(userWithoutPassord);
        res.status(200).json({ username: user.username, token });
    } catch (err) {
        return res.status(500)
            .json({ message: 'Erro interno', error: err.message });
    }
};
