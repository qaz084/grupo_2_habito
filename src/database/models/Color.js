module.exports = (sequelize, DataTypes) => {

    const Color = sequelize.define('Color', {
        name: DataTypes.STRING(255),
    }, {
        timestamps: false,

    });

    Color.associate = function (models) {
        Color.belongsToMany(models.Product, {
            as: 'product',
            through: 'colorproduct',
            foreignKey: 'colorId',
            otherKey: 'productId', 
        })
            
    };

    return Color;
};