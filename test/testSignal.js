const assert = require('assert');
const { Signal } = require('../src/signal.js');
const { Iterator } = require('../src/iterator.js');

describe('Signal', () => {
  it('should equate two instances of same class', () => {
    const states1 = new Iterator('red', 'green');

    const signal1 = new Signal(states1);
    const signal2 = new Signal(states1);

    assert.ok(signal1.equals(signal2));
  });

  it('should initialize the state as red when accessed the start method',
    () => {
      const states1 = new Iterator('red', 'green');
      const states2 = new Iterator('red', 'green');

      const signal1 = new Signal(states1);
      const signal2 = new Signal(states2);

      signal1.start();
      signal2.start();

      assert.ok(signal1.equals(signal2));
    });

  it('should update state with next state when updateSignal is accessed',
    () => {
      const states1 = new Iterator('red', 'green');
      const states2 = new Iterator('red', 'green');

      const signal1 = new Signal(states1);
      const signal2 = new Signal(states2);

      signal1.updateState();
      signal2.updateState();

      assert.ok(signal1.equals(signal2));
    });

  it('should cycle and assign state when called updateState multiple times',
    () => {
      const states1 = new Iterator('red', 'green');
      const states2 = new Iterator('red', 'green');

      const signal1 = new Signal(states1);
      const signal2 = new Signal(states2);

      signal1.updateState();
      signal1.updateState();
      signal1.updateState();
      signal2.updateState();

      assert.ok(signal1.equals(signal2));
    });

  it('isInGoState should not equate when the signal is in stop state',
    () => {
      const signal1 = new Signal();

      assert.ok(!signal1.isInGoState());
    });

  it('isInGoState should equate when the signal is in stop state',
    () => {
      const states1 = new Iterator('red', 'green');
      const signal1 = new Signal(states1);

      signal1.updateState();

      assert.ok(signal1.isInGoState());
    });
});
