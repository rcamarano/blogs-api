const postService = require('../services/PostService');
const { decodeToken } = require('../auth/authFunctions');

const createPost = async (req, res) => {
    const requiredFields = ['title', 'content', 'categoryIds'];
  
    const hasInvalidFields = requiredFields.some((field) => !req.body[field]);
    if (hasInvalidFields) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
  
    const { title, content, categoryIds } = req.body;
  
    const userId = decodeToken(req.headers.authorization).payload.data.id;
  
    const newPost = await postService.createPost({ title, content, categoryIds, userId });
  
    if (!newPost) return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  
    return res.status(201).json({ ...newPost.dataValues });
  };
  
  module.exports = {
    createPost,
  };
