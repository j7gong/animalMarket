// import models
const User = require('./User');
const Farm = require('./Farm');
const Animal = require('./Animal');
const Transaction  = require('./Transaction');

// User has one farm
User.hasOne(Farm, {
    foreignKey: 'user_id'
});
// Farm belongs to user
Farm.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
// Farms belongToMany Animals (through Transaction)
Farm.belongsToMany(Animal, {
    through: {
      model:Transaction,
      unique:false
    },
    constraints: false,
    foreignKey: 'farm_id',
    onDelete: 'SET NULL'
})
// Animals belongToMany Farms (through FarmAnimal)
Animal.belongsToMany(Farm, {
    through: {
      model:Transaction,
      unique:false
    },
    foreignKey: 'animal_id',
    onDelete: 'SET NULL',
    constraints: false
})
// Animals has many transactions
Animal.hasMany(Transaction, {
    foreignKey: 'animal_id'
})
// Transactions belong to many Animals
Transaction.belongsTo(Animal, {
    foreignKey: 'animal_id',
    onDelete: 'SET NULL'
})
// Transactions belong to many Farms
Transaction.belongsTo(Farm, {
foreignKey: 'farm_id',
onDelete: 'SET NULL'
})
// Farm has many transactions
Farm.hasMany(Transaction, {
    foreignKey: 'farm_id'
});
// Animal has many transactions
  Animal.hasMany(Transaction, {
    foreignKey: 'animal_id'
});

module.exports = {
    User,
    Farm,
    Animal,
    Transaction
  };