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
          field: 'diplay_name',
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING
      },
      {
        timestamps: false,
        tableName: 'users',
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
  