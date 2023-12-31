const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcryptjs');

// create our User model
class User extends Model {
    // set up method to run on instance data (per user) to check password
        checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
    
    }
    
    // create fields/columns for User model
    User.init(
      { 
        // define an id column
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        // define a username column
        username: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false
        },
        // define an email column
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true
          }
        },
        // define a password column
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            // this means the password must be at least 6 characters long
            len: [6]
          }
        }
      },
      {
        hooks: {
          // set up beforeCreate lifecycle "hook" functionality
          async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
          },
    
          async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
          }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
      }
    );
    
    module.exports = User;