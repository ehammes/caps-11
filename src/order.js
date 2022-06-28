'use strict';

const Chance = require('chance');
const chance = new Chance();

const order = {
  store: chance.company(),
  orderID: chance.integer({ min: 5, max: 10 }),
  customer: chance.name(),
  address: chance.city() + ', ' + chance.state(),
};

// console.log(order);

module.exports = order;
