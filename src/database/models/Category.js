module.exports = (sequelize, DataTypes) => {

    const Category = sequelize.define('Category', {
        name: DataTypes.STRING(255),
        image: DataTypes.STRING(255),
        description: DataTypes.STRING(255)
    }, {});

    Category.associate = function (models) {
        Category.hasMany(models.Product, {
            as: 'product',
            foreignKey: 'categoryId'
        })
    };

    return Category;
}