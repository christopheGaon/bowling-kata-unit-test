/**
 * Created by nramz on 04/12/15.
 */
(function () {
    'use strict';

    var serviceId = 'gameService';

    angular.module('proj1App').factory(serviceId, [
        serviceFunc
    ]);

    function serviceFunc() {

        return {
          testFunction: function() {
                return 10;
            }
        };
    }
})();