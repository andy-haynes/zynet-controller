const stampit = require('@stamp/it');

const { EventType, PinState } = require('../constants');
const EventLogger = require('../composables/event_logger');

const Pin = stampit.compose(EventLogger, {
  props: {
    GPIO: null,
  },
  init({ pIndex }) {
    this.gpio = this.GPIO({ pIndex });
    this.state = null;
    this.setState(PinState.INITIALIZED);
  },
  methods: {
    isHigh() {
      return this.state === PinState.HIGH;
    },
    logPinEvent(event, error) {
      this.logEvent(event, {
        error,
        pIndex: this.pIndex,
        state: this.state,
      });
    },
    high() {
      return this.gpio.high()
        .then(() => {
          this.logPinEvent(EventType.PIN_HIGH);
          this.setState(PinState.HIGH);
        });
    },
    low() {
      return this.gpio.low()
        .then(() => {
          this.logPinEvent(EventType.PIN_LOW);
          this.setState(PinState.LOW);
        });
    },
    setState(state) {
      this.state = state;
    },
  }
});

module.exports = Pin;
