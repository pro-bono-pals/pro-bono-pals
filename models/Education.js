const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Education extends Model{}

Education.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        education_name: {
            type: DataTypes.VARCHAR,
            allowNull: false
        }
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'education',
    }
)

module.exports = Education;