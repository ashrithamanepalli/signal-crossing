class Signal {
  constructor(states) {
    this.states = states;
    this.state = '';
  }

  start() {
    this.state = this.states.currentElement();
  }

  updateState() {
    this.state = this.states.nextElement();
    this.called = true;
  }

  isInGoState() {
    return this.state === 'green';
  }

  equals(otherSignal) {
    return otherSignal instanceof Signal &&
      this.state === otherSignal.state;
  }
}

exports.Signal = Signal;
