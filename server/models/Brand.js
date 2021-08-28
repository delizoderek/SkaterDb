const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Brand extends Model {}

Brand.init(
  {
      id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
      },
      brand_name:{
          type: DataTypes.STRING,
          allowNull: false,
      },
      video_id:{
        type: DataTypes.INTEGER,
          references: {
              model: 'video',
              id: 'id',
          }
      }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "brand",
  }
);

module.exports = Brand;