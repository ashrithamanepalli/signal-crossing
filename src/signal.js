class Signal {
  constructor() {
    this.state = 'red';
    this.allStates = ['green', 'red'];
    this.index = 0;
  }

  equals(otherSignal) {
    return otherSignal instanceof Signal &&
      this.state === otherSignal.state &&
      this.index === otherSignal.index;
  }
}

exports.Signal = Signal;
