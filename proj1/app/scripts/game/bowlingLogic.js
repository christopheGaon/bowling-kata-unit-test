/**
 * Created by cgaon
 * Classe qui gère la logique du jeu de bowling
 * regles de calcul et calcul des points
 * utilise des bowlingFrame pour compter les 10 Frames de la partie
 */
(function () {
    'use strict';

    var serviceId = 'bowlingLogic';

    angular.module('sogeApp').factory(serviceId, [
        'bowlingFrame',
        serviceFunc
    ]);

    function serviceFunc(bowlingFrame) {

        /**
         * Constructeur de la Logic du Bowling
         */
        var bowlingLogic = function() {
            /**
             * liste des bowlingFrame
             * @type {Array}
             */
            this.frames = [];
            /**
             * la bowlingFrame courante
             * @type {bowlingFrame}
             */
            this.currentFrame = new bowlingFrame(this.frames.length ===9);
            // par defaut on la met dans la liste des frames
            this.frames.push(this.currentFrame);
        };

        /**
         *  gère l'ajout de point
         * @param quillesDown nombre de quilles tombées
         */
        bowlingLogic.prototype.scored = function(quillesDown) {
            //si la currentFrame est terminée et que ce n est pas la dernière , on doit en créer une
            if(this.currentFrame.closed && this.currentFrame.bonus == false) {
                this.currentFrame = new bowlingFrame(this.frames.length ===9);
                this.frames.push(this.currentFrame);
            }
            //on delègue à la classe bowlingFrame le soin de stoker les quilles tombées
            this.currentFrame.scored(quillesDown);

        }

        /**
         * calcul des points finaux
         * @returns {number}
         */
        bowlingLogic.prototype.getPoints = function () {
            // res resultat final, frame bowlingFrame courante
            var res = 0;
            var frame;
            //on parcours les frames de la liste des frames
            for (var i = 0; i < this.frames.length; i++) {
                frame = this.frames[i];
                //on stoke dans nextframes les lancés suivants
                var nextframes;
                // si on a fait un strike sur un lancé qui n est pas le dernier
                if(frame.isStrike && frame.bonus == false) {
                    if(i+2<this.frames.length) {
                        nextframes = this.frames[i+1].tries.concat(this.frames[i+2].tries);
                        // on ajoute 10 à la sommes quilles tombées lors des deux lancés suivants
                        res +=10+nextframes[0] +nextframes[1];
                    }
                    else {
                        // cas particulier sur le dernier lancé
                        nextframes = this.frames[i+1].tries;
                        // on ajoute 10 à la sommes quilles tombées lors du lancé suivant
                        res +=10+nextframes[0] +nextframes[1];
                    }
                }
                else if(frame.isSpare && frame.bonus == false) {
                    //si on a fait un spare sur un lancé qui n est pas le dernier
                    nextframes = this.frames[i+1].tries;
                    res +=10+nextframes[0];
                }
                else {
                    // sinon on compte les points , on delegue à la bowlingFrame
                    res +=this.frames[i].getPoints();
                }

            };
            return res;
        }

        return bowlingLogic;
    }
})();