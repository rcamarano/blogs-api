const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'batatinhaPraHomenagearOZambs';

const JWT_CONFIG = {
  algorithm: 'HS256',
  // expiresIn: '10m',
};

const verifyToken = (token) => jwt.verify(token, secret);

const createToken = (payload) =>
  jwt.sign({ data: payload }, secret, JWT_CONFIG);

const decodeToken = (token) => jwt.decode(token, { complete: true });

module.exports = { verifyToken, createToken, decodeToken };
