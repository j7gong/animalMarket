const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'jingsi',
    email: 'jingsi@gmail.com',
    password: 'password123'
  },
  {
    username: 'test',
    email: 'test@gmail.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;