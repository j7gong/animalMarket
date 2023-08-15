const { Farm } = require('../models');

const farmdata = [
  {
    farm_name: 'Spring',
    fund: 10000,
    user_id: 1
  },
  {
    farm_name: 'Summer',
    fund: 8000,
    user_id: 2
  },
  {
    farm_name: 'Winter',
    fund: 6000,
    user_id: 3
  }
];

const seedFarms = () => Farm.bulkCreate(farmdata);

module.exports = seedFarms;