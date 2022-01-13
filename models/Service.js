const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Service extends Model{}

Service.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        service_name: {
            type: DataTypes.VARCHAR,
            allowNull: false
        }
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'service',
    }
)

module.exports = Service;