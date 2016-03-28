/**
 * Created by cgaon
 * Game de base , il delègue à sa logique la gestion des points
 */
(function () {
    'use strict';

    var serviceId = 'gameService';

    angular.module('sogeApp').factory(serviceId, [
        'bowlingLogic',
        serviceFunc
    ]);

    function serviceFunc(bowlingLogic) {

	var Game = function(username) {
        this.name = username;
        this.logic = new bowlingLogic();
    };
    
    Game.prototype.scored = function(quillesDown) {
        this.logic.scored(quillesDown);
    };

    Game.prototype.getPoints = function () {
         return this.logic.getPoints();
    };
    return Game;
    
    }
})();