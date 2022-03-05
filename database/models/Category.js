module.exports = (sequelize, DataTypes) => {

    const Category = sequelize.define('Category', {
        name: DataTypes.STRING(255),
    }, {});

    Category.associate = function (models) {
        Category.hasMany(models.Product, {
            as: 'product',
            // Algo más acá?
        })
    };

    return Category;
}