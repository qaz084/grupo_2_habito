module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define('Product', {
        name: DataTypes.STRING(255),
        price: DataTypes.DECIMAL(8,1),
        discount: DataTypes.INTEGER(11),
        description: DataTypes.STRING(1000),
        quantity: DataTypes.INTEGER(11),
        image1: DataTypes.STRING(255),
        image2: DataTypes.STRING(255),
        image3: DataTypes.STRING(255),
        image4: DataTypes.STRING(255),
        categoryId: DataTypes.INTEGER(11),
    }, {
        deletedAt:true,
        paranoid:true,
    });

    Product.associate = function (models) {

        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'categoryId'
        });

        Product.belongsToMany(models.Size, {
            as: 'size',
            through: 'productssize',
            foreignKey: 'productId',
            otherKey: 'sizeId', 
        });

        Product.belongsToMany(models.Color, {
            as: 'color',
            through: 'colorsproducts',
            foreignKey: 'productId',
            otherKey: 'colorId', 
        });

        Product.belongsToMany(models.Cart, {
            as: 'cart',
            through: 'cartproduct',
            foreignKey: 'productId',
            otherKey: 'cartId', 
        })
    }; 

    return Product;
}