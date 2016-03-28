/**
 * Created by cgaon
 *  Logique du jeu de bowling
 */
(function () {
    'use strict';

    var serviceId = 'bowlingFrame';

    angular.module('sogeApp').factory(serviceId, [
        serviceFunc
    ]);

    function serviceFunc() {

		var bowlingFrame = function(isBonus) {
       // console.log(isBonus)
        this.bonus = isBonus;
        this.closed = false;
        this.pinsKnowked = 0;
        this.tries = [];
        this.isStrike = false;
        this.isSpare = false;
        };

        bowlingFrame.prototype.scored = function(quillesDown) {
            
              this.pinsKnowked +=quillesDown;
             
              this.tries.push(quillesDown);
              if(this.bonus) {
                    console.log(quillesDown,this.pinsKnowked)
              }
              else {
                 if(this.pinsKnowked ===10) {
                    this.isStrike = this.tries.length ==1;
                    this.isSpare = this.tries.length ==2;
                 }
                if(this.tries.length ==2 || this.isStrike) {
                    this.closed = true;
                }
              }
              
        };

        bowlingFrame.prototype.getPinsKnowked = function () {
            return this.pinsKnowked;
        };

         bowlingFrame.prototype.getPoints = function () {
            return this.pinsKnowked;
        };

         return bowlingFrame;
    }
})();