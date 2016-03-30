/**
 * Created by cgaon
 * classe Game qui est en charge de gerer un jeu
 * il delègue à sa logique la gestion des points
 *  l attribut logic est toujours setter à bowlingLogic qui sait calculer les points
 */
(function () {
    'use strict';

    var serviceId = 'game';

    angular.module('sogeApp').factory(serviceId, [
        'bowlingLogic',
        serviceFunc
    ]);

    function serviceFunc(bowlingLogic) {

        var Game = function() {
            this.logic = new bowlingLogic();
        };

        /**
         * fonction qui gère l'ajout de point
         * @param quillesDown nombre de quilles tombées
         */
        Game.prototype.scored = function(quillesDown) {
            this.logic.scored(quillesDown);
        };

        /**
         * fonction qui gère le score final
         * @returns {}
         */
        Game.prototype.getPoints = function () {
            return this.logic.getPoints();
        };
        return Game;

    }
})();