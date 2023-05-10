const { verifyToken } = require('../auth/authFunctions');

const validateJwt = (req, res, next) => {
  try {
    const { authorization: token } = req.headers;
    if (!token) { return res.status(401).json({ message: 'Token não encontrado' }); }

    const payload = verifyToken(token);
    req.payload = payload;
    
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erro interno' });
  }
};

module.exports = validateJwt;
