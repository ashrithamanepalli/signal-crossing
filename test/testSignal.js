const assert = require('assert');
const { Signal } = require('../src/signal.js');

describe('Signal', () => {
  it('should equate two instances of same class', () => {
    const signal1 = new Signal();
    const signal2 = new Signal();

    assert.ok(signal1.equals(signal2));
  });
});
