const assert = require('assert');
const { Iterator } = require('../src/iterator');

describe('Iterator', () => {
  it('should give 1st element of array when accessed currentElement first time',
    () => {
      const iterator1 = new Iterator(1, 2, 3);

      assert.strictEqual(iterator1.currentElement(), 1);
    });

  it('should give 2nd element of array when accessed nextElement first time',
    () => {
      const iterator1 = new Iterator(1, 2, 3);

      assert.strictEqual(iterator1.nextElement(), 2);
    });

  it('should give 2nd element when called nextElement and then currentElement',
    () => {
      const iterator1 = new Iterator(1, 2, 3);

      const next = iterator1.nextElement();
      const final = iterator1.currentElement();

      assert.strictEqual(next, 2);
      assert.strictEqual(final, 2);
    });
});
