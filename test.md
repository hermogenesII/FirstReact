// math.js
function add(a, b) {
  return a + b;
}

module.exports = { add };

// math.test.js
const { test, describe } = require('node:test');
const assert = require('node:assert');
const { add } = require('./math');

describe('Math Functions', () => {
  test('add() should return the sum of two numbers', () => {
    assert.strictEqual(add(2, 3), 5);
    assert.strictEqual(add(-1, 1), 0);
  });

  test('add() should return a number', () => {
    assert.strictEqual(typeof add(1, 1), 'number');
  });
});
