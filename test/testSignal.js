const assert = require('assert');
const { Signal } = require('../src/signal.js');

describe('Signal', () => {
  it('should equate two instances of same class', () => {
    const signal1 = new Signal();
    const signal2 = new Signal();

    assert.ok(signal1.equals(signal2));
  });

  it('should give the nextState when getNextState is accessed',
    () => {
      const signal1 = new Signal();

      const state1 = signal1.getNextState();

      assert.strictEqual(state1, 'green');
    });

  it('should update index and return next state when getNextState is accessed',
    () => {
      const signal1 = new Signal();
      const signal2 = new Signal();

      const state1 = signal1.getNextState();
      const state2 = signal2.getNextState();

      assert.ok(signal1.equals(signal2));
      assert.strictEqual(state1, state2);
    });

  it('should update state with next state when updateSignal is accessed',
    () => {
      const signal1 = new Signal();
      const signal2 = new Signal();

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
      const signal1 = new Signal();

      signal1.updateState();

      assert.ok(signal1.isInGoState());
    });
});
