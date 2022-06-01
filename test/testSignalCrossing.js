const assert = require('assert');
const { SignalCrossing } = require('../src/signalCrossing.js');

describe('SignalCrossing', () => {
  it('should equate two instances of class SignalCrossing', () => {
    const crossing1 = new SignalCrossing();
    const crossing2 = new SignalCrossing();
    assert.ok(crossing1.equals(crossing2));
  });
});
