const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL, {logging: console.log})
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: '127.0.0.1',
        // host: 'localhost', try this host if the 127.0.0.1 doesn't work
      dialect: 'mysql',
        username: 'root',
        password: 'password',
        database: 'foodprint_db',
      dialectOptions: {
        decimalNumbers: true,
      }, logging: console.log
    });

module.exports = sequelize;

