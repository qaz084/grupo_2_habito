module.exports = (sequelize, DataTypes) => {

    const Color = sequelize.define('Color', {
        name: DataTypes.STRING(255),
    }, {});

    Color.associate = function (models) {
        Color.belongsToMany(modelos.Product, {
            as: 'product',
            through: 'colorProduct',
            foreignKey: 'colorId',
            otherKey: 'productId', 
        })
            
    };

    return Color;
};