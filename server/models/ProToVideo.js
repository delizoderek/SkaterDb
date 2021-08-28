const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class ProToVideo extends Model {}

ProToVideo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    pro_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "pro",
        key: "id",
      },
    },
    video_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "video",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "pro_to_video",
  }
);
module.exports = ProToVideo;