class Signal {
  constructor() {
  }

  equals(otherSignal) {
    return otherSignal instanceof Signal;
  }
}

exports.Signal = Signal;
