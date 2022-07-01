'use strict';

class Queue {
  constructor() {
    this.data = {};
  }

  store(key, value) {
    // console.log('something was stored');
    this.data[key] = value;
    return key;
  }

  read(key) {
    // console.log('something was read');
    return this.data[key];
  }

  remove(key) {
    // console.log('something was deleted');
    let value = this.data[key];
    delete this.data[key];
    return value;
  }
}

module.exports = Queue;