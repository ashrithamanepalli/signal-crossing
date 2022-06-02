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

  it('should not equate if the Signals are not equal', () => {
    const signal1 = new Signal('red', 'green');
    const signal2 = new Signal('red');
    const signals1 = new Iterator(signal1, signal2);
    const signals2 = new Iterator(signal1);

    const crossing1 = new SignalCrossing(signals1);
    const crossing2 = new SignalCrossing(signals2);
    assert.ok(!crossing1.equals(crossing2));
  });
});
