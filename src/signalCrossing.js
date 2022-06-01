class SignalCrossing {
  constructor(signals) {
    this.signals = signals;
    this.currentOnSignal = '';
    this.nextSignal = '';
  }

  equals(otherCrossing) {
    return otherCrossing instanceof SignalCrossing;
  }
}
exports.SignalCrossing = SignalCrossing;
