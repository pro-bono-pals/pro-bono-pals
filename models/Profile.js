const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Profile extends Model {}

Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        reference: {
            model: "user",
            key: "id"
        }
    },
    educationId: {
        type: DataTypes.INTEGER,
        reference: {
            model: "education",
            key: "id"
        }
    },
    disclaimer: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    serviceId: {
        type: DataTypes.INTEGER,
        reference: {
            model: "service",
            key: "id"
        }
    },
    zipcode: {
        type: DataTypes.CHAR(5),
        // allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'profile',
  }
);

module.exports = Profile;
