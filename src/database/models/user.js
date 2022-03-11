module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
        name: DataTypes.STRING(255),
        email: DataTypes.STRING(255),
        avatar: DataTypes.STRING(500),
        password: DataTypes.STRING(500),
        statusId: DataTypes.INTEGER(11)
    }, {
        deletedAt:true
    });

    User.associate = function (models) {
        User.hasMany(models.Cart, {
            as: 'cart',
            foreignKey: 'userId'
        });
        User.belongsTo(models.Status, {
            as: 'status',
            foreignKey: 'statusId'
        });
            
    };

    return User;
};