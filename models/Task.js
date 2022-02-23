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
        service_id:{
            type: DataTypes.INTEGER,
            references: {
                model:"service",
                key:"id",
            }
        },
        name:{
            type: DataTypes.CHAR,
            allowNull:false,
        },
        description:{
            type: DataTypes.CHAR,
            allowNull:false,
        },
        postDate: {
            type: DataTypes.DATE,
            allowNull:false,
            defaultValue: DataTypes.NOW
        },
        user_id: {
            type: DataTypes.INTEGER,
            references:{
                model:"user",
                key:"id",
            }
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue:false
        },
        isCompleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue:false
        },
        provider_id:{
            type:DataTypes.INTEGER,
            defaultValue:null,
        },
        allotedTime: {
            type: DataTypes.TIME,
            allowNull: false
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