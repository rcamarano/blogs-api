const express = require('express');
const postController = require('../controllers/PostController');
const validateJWT = require('../middleware/validateJWT');

const router = express.Router();

router.post('/', validateJWT, postController.createPost);
router.put('/:id', validateJWT, postController.updatePost);
router.delete('/:id', validateJWT, postController.deletePost);
router.get('/search', validateJWT, postController.getPostByTerm);
router.get('/:id', validateJWT, postController.getPostById);
router.get('/', validateJWT, postController.getAllPosts);

module.exports = router;