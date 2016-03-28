'use strict';

describe('Game', function () {

  // load the controller's module
  beforeEach(module('sogeApp'));

  var game
  // Initialize the game Service
  beforeEach(inject(function (_gameService_) {
    game = new _gameService_("bidule");
    
  }));

  it('scored 9-9-9-9-9-9-9-9-9-9- and get 90', function () {
    for(var i =0; i<10;i++) {
      game.scored(9);
      game.scored(0);
       
    }

    expect(game.getPoints()).toBe(90);
  });

   it('scored XXXXXXXXXXXX and get 300', function () {
    for(var i =0; i<12;i++) {
      game.scored(10);
    }

    expect(game.getPoints()).toBe(300);
  });

   it('scored 5/5/5/5/5/5/5/5/5/5/5 and get 150', function () {
    for(var i =0; i<20;i++) {
      game.scored(5);
    }
      game.scored(5);
    expect(game.getPoints()).toBe(150);
  });


});
