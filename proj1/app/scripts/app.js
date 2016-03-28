(function() {
    'use strict';

    var app = angular.module('sogeApp',[]);
	app.run(['gameService',serviceFunc]);



	function serviceFunc (gameService) {
			console.log("start app");
			var game = new gameService("bidule");
			
		}
})();
