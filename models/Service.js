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
        name: {
            type: DataTypes.CHAR,
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