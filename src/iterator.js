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
      this.index === otherIterator.index;
  }
}

exports.Iterator = Iterator;
