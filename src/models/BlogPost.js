const BlogPostModel = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define(
      'BlogPost',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          field: 'user_id',
          references: {
            model: 'Users',
            key: 'id',
          },
          foreignKey: true,
        },
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
      },
      {
        timestamps: false,
        tableName: 'blog_posts',
        underscored: true,
      },
    );
  
    BlogPost.associate = ({ User }) => {
      BlogPost.belongsTo(User, { foreignKey: 'userId', as: 'user' });
    };
  
    return BlogPost;
  };
  
  module.exports = BlogPostModel;