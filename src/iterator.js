const areArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }
  return true;
};

class Iterator {
  constructor(...args) {
    this.args = args;
    this.index = 0;
  }

  currentElement() {
    return this.args[this.index];
  }

  nextElement() {
    this.index++;
    this.index = this.index >= this.args.length ? 0 : this.index;
    return this.args[this.index];
  }

  equals(otherIterator) {
    return otherIterator instanceof Iterator &&
      areArraysEqual(this.args, otherIterator.args) &&
      this.index === otherIterator.index;
  }
}

exports.Iterator = Iterator;
