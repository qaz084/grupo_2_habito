module.exports = (sequelize, DataTypes) => {

    const UserCategory = sequelize.define('UserCategory', {
        state: DataTypes.STRING(255),
    }, {});

    UserCategory.associate = function (models) {
        UserCategory.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'userCategoryId'
        })
            
    };

    return UserCategory;
};