const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Task extends Model{}

Task.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        serviceId:{
            type: DataTypes.INTEGER,
            references: {
                model:"service",
                key:"id",
            }
        },
        task_name:{
            type: DataTypes.VARCHAR,
            allowNull:false,
        },
        description:{
            type: DataTypes.VARCHAR,
            allowNull:false,
        },
        post_date: {
            type: DataTypes.DATE,
            allowNull:false,
        },
        userId: {
            type: DataTypes.INTEGER,
            references:{
                model:"user",
                key:"id",
            }
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
        },
        isCompleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'task',
    }
)

module.exports = Task;