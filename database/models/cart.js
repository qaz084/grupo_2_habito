module.exports = (sequelize, DataTypes) => {

    const Cart = sequelize.define('Cart', {
        name: DataTypes.STRING(255),
        userId: DataTypes.INTEGER(11)
    }, {});

    Cart.associate = function (models) {
        Cart.belongsToMany(modelos.Product, {
            as: 'product',
            through: 'cartProduct',
            foreignKey: 'cartId',
            otherKey: 'productId', 
        });

        Cart.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'userId'
        });
            
    };

    return Cart;
};