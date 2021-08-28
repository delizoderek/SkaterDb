const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class SkateVideo extends Model {}

SkateVideo.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        release_date:{
            type: DataTypes.DATE,
        },
        vidLink:{
            type: DataTypes.TEXT,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "brand",
    },
);

module.exports = SkateVideo;