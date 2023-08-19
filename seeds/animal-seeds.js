const { Animal } = require('../models');

const animaldata = [
    {
        animal_name: 'Chicken',
        sell_price: 25,
        buy_price: 10
      },
    {
        animal_name: 'Pig',
        sell_price: 50,
        buy_price: 20
    },
    {
        animal_name: 'Cattle',
        sell_price: 100,
        buy_price: 40
    }
];

const seedAnimals = () => Animal.bulkCreate(animaldata);

module.exports = seedAnimals;