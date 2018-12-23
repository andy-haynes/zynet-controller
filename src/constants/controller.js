const GPIOType = {
  INPUT: 'GPIO_TYPE/INPUT',
  OUTPUT: 'GPIO_TYPE/OUTPUT',
};

const LEDColor = {
  BLUE: 'LED_COLOR/BLUE',
  GREEN: 'LED_COLOR/GREEN',
  RED: 'LED_COLOR/RED',
  YELLOW: 'LED_COLOR/YELLOW',
};

const LEDType = {
  DATA: 'LED_TYPE/DATA',
  ERROR: 'LED_TYPE/ERROR',
  SUCCESS: 'LED_TYPE/SUCCESS',
  WARNING: 'LED_TYPE/WARNING',
};

const LogLevel = {
  DEBUG: 'LOG_LEVEL/DEBUG',
  ERROR: 'LOG_LEVEL/ERROR',
  SILENT: 'LOG_LEVEL/SILENT',
};

const PIDParams = {
  PROPORTIONAL_GAIN: 'PID/PROPORTIONAL_GAIN',
  INTEGRAL_GAIN: 'PID/INTEGRAL_GAIN',
  DERIVATIVE_GAIN: 'PID/DERIVATIVE_GAIN',
  MAX_INTEGRAL: 'PID/MAX_INTEGRAL',
};

const PIDState = {
  UNINITIALIZED: 'PID_STATE/UNINITIALIZED',
  READY: 'PID_STATE/READY',
  OVER: 'PID_STATE/OVER',
  UNDER: 'PID_STATE/UNDER',
  ERROR: 'PID_STATE/ERROR',
};

const PinState = {
  INITIALIZED: 'PIN_STATE/INITIALIZED',
  CLOSED: 'PIN_STATE/CLOSED',
  HIGH: 'PIN_STATE/HIGH',
  LOW: 'PIN_STATE/LOW',
};

module.exports = {
  GPIOType,
  LEDColor,
  LEDType,
  LogLevel,
  PIDParams,
  PIDState,
  PinState,
};
