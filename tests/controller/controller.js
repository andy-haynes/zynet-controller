const { LogLevel } = require('../../src/constants/index');
const Thermostat = require('../../src/thermostat/thermostat');
const Controller = require('../../src/controller/controller');
const { mockPinController } = require('../mocks');
const { assert, sinon } = require('../utils');

const TARGET_TEMP = 152;

const mockConfig = {
  leds: [],
  relays: [],
  schedule: {
    targetTemperature: TARGET_TEMP,
  },
  thermometer: {
    readIntervalMS: 1000,
  }
};

const SilentController = Controller.props({
  logLevel: LogLevel.SILENT,
  PinController: mockPinController(false).methods({
    disposeAll: sinon.stub().resolves(),
  }),
  Thermostat: Thermostat.methods({
    initialize: sinon.stub().resolves(),
    setTemperature: sinon.stub().resolves(),
  }),
});

describe('Controller', () => {
  describe('setTargetTemperature', () => {
    it('initializes the temperature controller and sets target temperature', () => {
      const controller = SilentController(mockConfig);
      return controller.setTargetTemperature(TARGET_TEMP)
        .then(() => {
          assert(
            controller.thermostat.initialize.calledOnce,
            'calls initialize on the temperature controller'
          );
        });
    });
  });

  describe('shutdown', () => {
    it('disposes registered pins', () => {
      const controller = SilentController(mockConfig);
      return controller.shutdown()
        .then(() => assert(
          controller.pinController.disposeAll.calledOnce,
          'pin register disposes all pins'
        ));
    });
  });
});