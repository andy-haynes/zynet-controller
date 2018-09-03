const LEDColor = {
  BLUE: 'LED_COLOR/BLUE',
  GREEN: 'LED_COLOR/GREEN',
  RED: 'LED_COLOR/RED',
  YELLOW: 'LED_COLOR/YELLOW',
};

const PIDState = {
  UNINITIALIZED: 'PID_STATE/UNINITIALIZED',
  READY: 'PID_STATE/READY',
  ON: 'PID_STATE/ON',
  OFF: 'PID_STATE/OFF',
};

const PinState = {
  INITIALIZED: 'PIN_STATE/INITIALIZED',
  CLOSED: 'PIN_STATE/CLOSED',
  HIGH: 'PIN_STATE/HIGH',
  LOW: 'PIN_STATE/LOW',
};

module.exports = {
  LEDColor,
  PIDState,
  PinState,
};
