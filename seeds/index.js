const seedUsers = require('./user-seeds');
const seedFarms = require('./farm-seeds');
const seedAnimals = require('./animal-seeds');
const seedTransactions = require('./transaction-seeds')

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedFarms();
  console.log('\n----- FARMS SEEDED -----\n');

  await seedAnimals();
  console.log('\n----- ANIMALS SEEDED -----\n');

  await seedTransactions();
  console.log('\n----- TRANSACTIONS SEEDED -----\n');

  process.exit(0);
};

seedAll();