(function() {
    'use strict';
    var app = angular.module('sogeApp',[]);
    app.run(['gameService',serviceFunc]);
    function serviceFunc (game) {
        console.log("start app");
        /**
         * bootStrap de l'application
         * instanciation de la classe Game
         * @type {gameService}
         */
        var game = new game();
    }
})();
