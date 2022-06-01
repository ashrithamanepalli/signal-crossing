const assert = require('assert');
const { Iterator } = require('../src/iterator.js');
const { Signal } = require('../src/signal.js');
const { SignalCrossing } = require('../src/signalCrossing.js');

describe('SignalCrossing', () => {
  it('should equate two instances of class SignalCrossing', () => {
    const signal1 = new Signal('red', 'green');
    const signal2 = new Signal('red', 'green');
    const signals = new Iterator(signal1, signal2);

    const crossing1 = new SignalCrossing(signals);
    const crossing2 = new SignalCrossing(signals);
    assert.ok(crossing1.equals(crossing2));
  });
});
