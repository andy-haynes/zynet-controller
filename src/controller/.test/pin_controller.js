const { assert } = require('chai');
const sinon = require('sinon');

const Pin = require('../../composables/pin');
const PinController = require('../pin_controller');

const PIN_NUMBER = 10;

const SilentPinController = PinController.props({ test: true });

describe('PinController', () => {
  let MockPinController;
  let BrokePinController;
  beforeEach(() => {
    MockPinController = SilentPinController.props({
      Pin: Pin.methods({
        open: sinon.stub(),
        close: sinon.stub(),
      }),
    });
    BrokePinController = SilentPinController.props({
      Pin: Pin.methods({
        open: sinon.stub().throws(),
        close: sinon.stub().throws(),
      }),
    });
  });

  describe('disposeAll', () => {
    it('closes and removes all pins after executing', () => {
      const pinController = MockPinController();
      pinController.registerPin(PIN_NUMBER);
      pinController.disposeAll();
      assert.isEmpty(pinController.pins, 'set of pins is empty');
    });

    it('logs and swallows any errors', () => {
      const pinController = MockPinController.props({
        Pin: Pin.methods({
          open: sinon.stub(),
          close: sinon.stub().throws(),
        }),
      })();
      pinController.registerPin(PIN_NUMBER);
      assert.doesNotThrow(() => pinController.disposeAll(), 'does not throw when close fails');
    });
  });

  describe('disposePin', () => {
    it('removes pin from registry', () => {
      const pinController = MockPinController();
      const pin = pinController.registerPin(PIN_NUMBER);
      pinController.disposePin(pin);
      assert.notInclude(pinController.pins, pin, 'pin is no longer included in the set of pins');
    });
  });

  describe('registerPin', () => {
    it('adds pin to the registry', () => {
      const pinController = MockPinController();
      const pin = pinController.registerPin(PIN_NUMBER);
      assert.include(pinController.pins, pin, 'pin is included in the set of pins');
    });
  });
});