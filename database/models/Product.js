module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define('Product', {
        name: DataTypes.STRING(255),
        price: DataTypes.DECIMAL(3,1),
        discount: DataTypes.INTEGER(11),
        description: DataTypes.STRING(1000),
        quantity: DataTypes.INTEGER(11),
        image: DataTypes.STRING(255),
        categoryId: DataTypes.INTEGER(11),
    }, {});

    Product.associate = function (models) {

        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'categoryId'
        });

        Product.belongsToMany(modelos.Size, {
            as: 'size',
            through: 'productSize',
            foreignKey: 'productId',
            otherKey: 'sizeId', 
        });

        Product.belongsToMany(modelos.Color, {
            as: 'color',
            through: 'colorProduct',
            foreignKey: 'productId',
            otherKey: 'colorId', 
        });

        Product.belongsToMany(modelos.Cart, {
            as: 'cart',
            through: 'cartProduct',
            foreignKey: 'productId',
            otherKey: 'cartId', 
        })
    }; 

    return Product;
}