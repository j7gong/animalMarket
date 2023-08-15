const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Farm model
class Farm extends Model {}

    // create fields/columns for Farm model
    Farm.init(
        {
        // define an id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // define a farmname column
        farm_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // define a fund column
        fund: {
            type: DataTypes.INTEGER,
            defaultValue: 10000,
            allowNull: false,
            validate:{
                isNumeric: true,
                min: 0
            }
        },
        // define a user_id column that is referenced to id in user table
        user_id: {
            type: DataTypes.INTEGER,
            references: {
            model: 'user',
            key: 'id'
            }
        }
        },
        {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'farm',
        }
    );
  
  module.exports = Farm;
  