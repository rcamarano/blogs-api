const express = require('express');
const userController = require('../controllers/UserController');
const userValidation = require('../middleware/validateUser');

const router = express.Router();

router.post('/', userValidation, userController.create);

module.exports = router;