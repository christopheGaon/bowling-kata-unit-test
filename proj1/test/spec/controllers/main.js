'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('proj1App'));

  var MainCtrl
  // Initialize the game Service
  beforeEach(inject(function (_gameService_) {
    MainCtrl = _gameService_;
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainCtrl.testFunction()).toBe(10);
  });
});
