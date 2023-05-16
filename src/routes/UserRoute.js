const express = require('express');
const userController = require('../controllers/UserController');
const userValidation = require('../middleware/validateUser');
const validateJwt = require('../middleware/validateJWT');

const router = express.Router();

router.post('/', userValidation, userController.create);
router.get('/', validateJwt, userController.getAllUsers);
router.get('/:id', validateJwt, userController.getUserById);
router.delete('/me', validateJwt, userController.deleteUser);

module.exports = router;