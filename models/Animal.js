const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

// Initialize animal model by extending sequelize's model class
class Animal extends Model {}

// set up fields/columns for animal model
Animal.init(
    {   // define an id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true
        }, 
        // define an animal name column
        animal_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true

        },
        // define a sell price column
        sell_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
              isNumeric: true,
              min: 0
            }
        },
        // define a buy price column
        buy_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
              isNumeric: true,
              min: 0
            }
        }
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'animal',
      }
)

module.exports = Animal;