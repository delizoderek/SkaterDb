const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Skater extends Model {}

Skater.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        pronouns: {
            type: DataTypes.STRING,
            allowNull:true,

        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        stance:{
            type: DataTypes.ENUM('Regular','Goofy','Both'),
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'pro_skater',
    },
);

module.exports = Skater;