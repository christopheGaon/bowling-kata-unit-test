(function() {
    'use strict';
    var app = angular.module('sogeApp',[]);
    app.run(['game',serviceFunc]);
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
