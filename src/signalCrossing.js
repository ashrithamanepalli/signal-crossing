// const { Signal } = require('./signal.js');
// const { Iterator } = require('./iterator.js');

class SignalCrossing {
  constructor(signals) {
    this.signals = signals;
    this.currentSignal = '';
    this.nextSignal = '';
  }

  initializeSignals() {
    this.currentSignal = this.signals.currentElement();
    this.nextSignal = this.signals.nextElement();
  }

  startSignalCrossing() {
    this.initializeSignals();
    this.currentSignal.updateState();
    console.log(this);
  }

  changeTurnOn() {
    this.currentSignal.updateState();
    this.initializeSignals();
    this.currentSignal.updateState();
    console.log(this);
  }

  equals(otherCrossing) {
    return otherCrossing instanceof SignalCrossing &&
      this.signals.equals(otherCrossing.signals) &&
      this.currentOnSignal === otherCrossing.currentOnSignal &&
      this.nextSignal === otherCrossing.nextSignal;
  }
}

// const signal1 = new Signal(new Iterator('red', 'green'));
// const signal2 = new Signal(new Iterator('red', 'green'));

// const signals = new Iterator(signal1, signal2);

// const sign = new SignalCrossing(signals);

// sign.startSignalCrossing();
// sign.changeTurnOn();
// sign.changeTurnOn();

exports.SignalCrossing = SignalCrossing;
