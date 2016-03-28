/**
 * Created by cgaon
 *  Logique du jeu de bowling
 */
(function () {
    'use strict';

    var serviceId = 'bowlingLogic';

    angular.module('sogeApp').factory(serviceId, [
        'bowlingFrame',
        serviceFunc
    ]);

    function serviceFunc(bowlingFrame) {

		var bowlingLogic = function() {
        this.frames = [];
        this.currentFrame = new bowlingFrame(this.frames.length ===9);
        this.frames.push(this.currentFrame);
        };

        bowlingLogic.prototype.scored = function(quillesDown) {
            
              if(this.currentFrame.closed && this.currentFrame.bonus == false) {
                 this.currentFrame = new bowlingFrame(this.frames.length ===9);
                 this.frames.push(this.currentFrame);
              }
               //console.log(quillesDown, this.frames.length, this.currentFrame.bonus)
               this.currentFrame.scored(quillesDown);

        }

        bowlingLogic.prototype.getPoints = function () {
               
               var res = 0;
               var frame;
               for (var i = 0; i < this.frames.length; i++) {
                    frame = this.frames[i];
                    //console.log(i, frame.isStrike)
                     var nextframes;
                    if(frame.isStrike && frame.bonus == false) {
                        if(i+2<this.frames.length) {
                             nextframes = this.frames[i+1].tries.concat(this.frames[i+2].tries);  
                             res +=10+nextframes[0] +nextframes[1];  
                        }
                        else {
                            nextframes = this.frames[i+1].tries;  
                            res +=10+nextframes[0] +nextframes[1]; 
                        }
                    }
                    else if(frame.isSpare && frame.bonus == false) {
                             nextframes = this.frames[i+1].tries;  
                             res +=10+nextframes[0];  
                    }
                    else {
                        res +=this.frames[i].getPoints();    
                    }
                        
                    
                   //console.log(i,res);
               };
               return res;
        }

         return bowlingLogic;
    }
})();