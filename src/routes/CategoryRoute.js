const express = require('express');
const categoryController = require('../controllers/CategoryController');
const categoryValidation = require('../middleware/validateCategory');
const validateJWT = require('../middleware/validateJWT');

const router = express.Router();

router.post('/', validateJWT, categoryValidation, categoryController.createCat);

router.get('/', validateJWT, categoryController.getAllCat);

module.exports = router;