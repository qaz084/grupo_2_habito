module.exports = (sequelize, DataTypes) => {

    const Size = sequelize.define('Size', {
        name: DataTypes.STRING(10)
    }, {
        //freezeTableName: true,
        tableName: 'size',
        timestamps: false,
    });

    Size.associate = function (models) {
        Size.belongsToMany(models.Product, {
            as: 'product',
            through: 'productssize',
            foreignKey: 'sizeId',
            otherKey: 'productId', 
        })
            
    };

    return Size;
};