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

  const getAllPosts = async (_req, res) => {
    const categories = (await postService.getAllPosts());

    return res.status(200).json(categories);
  };
  
  const getPostById = async (req, res) => {
    const { id } = req.params;
  
    const post = (await postService.getPostById(id));
  
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
  
    return res.status(200).json(post);
  };

  const updatePost = async (req, res) => {
    const requiredFields = ['title', 'content'];
  
    const hasInvalidFields = requiredFields.some((field) => !req.body[field]);
    if (hasInvalidFields) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
  
    const { title, content } = req.body;
    const { id } = req.params;
  
    const userId = decodeToken(req.headers.authorization).payload.data.id;
  
    const post = await postService.getPostById(id);
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    if (post.userId !== userId) return res.status(401).json({ message: 'Unauthorized user' });
  
    await postService.updatePost({ id, title, content });
  
    const updatedPost = await postService.getPostById(id);
  
    return res.status(200).json({ ...updatedPost.dataValues });
  };
  
  module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
  };
