class Signal {
  constructor() {
    this.state = 'red';
    this.allStates = ['red', 'green'];
    this.index = 0;
  }

  getNextState() {
    this.index++;
    this.index = this.index >= this.allStates.length ? 0 : this.index;
    return this.allStates[this.index];
  }

  updateState() {
    this.state = this.getNextState();
  }

  equals(otherSignal) {
    return otherSignal instanceof Signal &&
      this.state === otherSignal.state &&
      this.index === otherSignal.index;
  }
}

exports.Signal = Signal;
