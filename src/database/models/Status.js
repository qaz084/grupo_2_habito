module.exports = (sequelize, DataTypes) => {

    const Status = sequelize.define('Status', {
        admin: DataTypes.INTEGER(11),
    }, {});

    Status.associate = function (models) {
        Status.hasMany(models.User, {
            as: 'user',
            foreignKey: 'StatusId'
        });
    };

    return Status;
};