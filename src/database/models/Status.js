module.exports = (sequelize, DataTypes) => {

    const Status = sequelize.define('Status', {
        admin: DataTypes.Boolean,
    }, {});

    Status.associate = function (models) {
        Status.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'statusId'
        })
            
    };

    return Status;
};