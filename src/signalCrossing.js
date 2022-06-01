class SignalCrossing {
  constructor(signals) {
    this.signals = signals;
    this.currentOnSignal = '';
    this.nextSignal = '';
  }

  equals(otherCrossing) {
    return otherCrossing instanceof SignalCrossing &&
      this.signals.equals(otherCrossing.signals) &&
      this.currentOnSignal === otherCrossing.currentOnSignal &&
      this.nextSignal === otherCrossing.nextSignal;
  }
}

exports.SignalCrossing = SignalCrossing;
