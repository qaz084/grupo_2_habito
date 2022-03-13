module.exports = (sequelize, DataTypes) => {

    const Size = sequelize.define('Size', {
        name: DataTypes.STRING(255),
    }, {
        timestamps:false
    });

    Size.associate = function (models) {
        Size.belongsToMany(models.Product, {
            as: 'product',
            through: 'productSize',
            foreignKey: 'sizeId',
            otherKey: 'productId', 
        })
            
    };

    return Size;
};