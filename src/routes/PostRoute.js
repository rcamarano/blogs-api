const express = require('express');
const postController = require('../controllers/PostController');
const validateJWT = require('../middleware/validateJWT');

const router = express.Router();

router.post('/', validateJWT, postController.createPost);

module.exports = router;