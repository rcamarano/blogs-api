const { BlogPost, Category, PostCategory } = require('../models');

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
  
  const getAllCat = () => BlogPost.findAll();
  
  module.exports = {
    createPost,
    getAllCat,
  };