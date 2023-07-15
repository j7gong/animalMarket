const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Transaction extends Model {}

// set up fields/columns for Transaction model
Transaction.init(
    {
      // define an id column
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      // define a transaction type column
      transaction_type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // define a transaction amount column
      transaction_amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true,
          min: 0
        }
      },
      // define an animal id column that is referenced to id in animal table
      animal_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'animal',
          key: 'id'
        }
      },
      // define a farm id column that is referenced to id in farm table
      farm_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'farm',
            key: 'id'
          }
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'transaction',
    }
  );
  
  module.exports = Transaction;
  