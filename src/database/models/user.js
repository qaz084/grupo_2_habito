module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
        name: DataTypes.STRING(255),
        email: DataTypes.STRING(255),
        avatar: DataTypes.STRING(500),
        password: DataTypes.STRING(500),
        userCategoryId: DataTypes.INTEGER(11)
    }, {
        deletedAt:true
    });

    User.associate = function (models) {
        User.hasMany(modelos.Cart, {
            as: 'cart',
            foreignKey: 'userId'
        })
            
    };

    return User;
};