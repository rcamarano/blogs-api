const { 
  BlogPost, 
  Category, 
  PostCategory,
  User,
} = require('../models');

const createPost = async ({ title, content, userId, categoryIds }) => {
    const allCat = await Category.findAll();
    const allCatIds = allCat.map((category) => category.id);
  
    const hasInvalidCategory = categoryIds
      .some((category) => !allCatIds.includes(category));
  
    if (hasInvalidCategory) {
      return undefined;
    }
  
    const newPost = await BlogPost
      .create({ title, content, userId, updated: new Date(), published: new Date() });
  
    await PostCategory.bulkCreate(
      categoryIds.map((categoryId) => ({ postId: newPost.id, categoryId })),
    );
  
    return newPost;
  };
  
  const getPostById = async (postId) => {
    const post = await BlogPost.findByPk(
      postId,
      {
        include: [
          { model: Category, as: 'categories', through: { attributes: [] } },
          { model: User, as: 'user', attributes: { exclude: ['password'] } },
        ],
      },
    );
    return post;
  };
  
  const getAllPosts = async () => {
    const posts = await BlogPost.findAll(
      {
        include: [
          { model: Category, as: 'categories', through: { attributes: [] } },
          { model: User, as: 'user', attributes: { exclude: ['password'] } },
        ],
      },
    );
    return posts;
  };
  
  module.exports = {
    createPost,
    getAllPosts,
    getPostById,
  };