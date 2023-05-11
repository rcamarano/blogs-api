/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      'User',
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        displayName: {
          type: DataTypes.STRING,
          field: 'display_name',
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING
      },
      {
        timestamps: false,
        tableName: 'users',
        underscored: true,
      },
    );
    // User.associate = (models) => {
    //   User.hasMany(models.Product, {
    //     foreignKey: 'userId',
    //     as: 'products',
    //   });
    // };
    return User;
  };
  