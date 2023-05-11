const express = require('express');
const loginController = require('../controllers/LoginController');
const loginValidation = require('../middleware/validateLogin');

const router = express.Router();

router.post('/', loginValidation, loginController.login);

module.exports = router;