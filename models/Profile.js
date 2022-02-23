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
    user_id: {
        type: DataTypes.INTEGER,
        reference: {
            model: "user",
            key: "id"
        }
    },
    education_id: {
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
    service_id: {
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
