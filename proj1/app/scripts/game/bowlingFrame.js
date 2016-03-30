/**
 * Created by cgaon
 *  Classe bowlingFrame qui stoke les données relative à une Frame dans le jeu de Bowling
 */
(function () {
    'use strict';

    var serviceId = 'bowlingFrame';

    angular.module('sogeApp').factory(serviceId, [
        serviceFunc
    ]);

    function serviceFunc() {

        /**
         * Constructeur de la bowlingFrame
         * @param isBonus indique si la Frame est la dernière pour gèrer le bonus
         */
        var bowlingFrame = function(isBonus) {
            /**
             * est ce la dernière Frame qui doit gèrer le bonus
             * @type {*}
             */
            this.bonus = isBonus;
            /**
             * indique si la frame est terminée, on ne peut faire que deux lancées dans une Frame sauf si c'est la dernière
             * @type {boolean}
             */
            this.closed = false;
            /**
             * somme des quilles tombées
             * @type {number}
             */
            this.pinsKnowked = 0;
            /**
             * liste des nombres de quilles tombées dans cette frame
             * @type {Array}
             */
            this.tries = [];
            /**
             * si la Frame est un strike
             * @type {boolean}
             */
            this.isStrike = false;
            /**
             * si la Frame est un spare
             * @type {boolean}
             */
            this.isSpare = false;
        };

        /**
         * gère l'ajout de point
         * @param quillesDown nombre de quilles tombées
         */
        bowlingFrame.prototype.scored = function(quillesDown) {
            //ajoute le nombre de quille aux points de la frame
            this.pinsKnowked +=quillesDown;
            //ajoute dans la liste , le nombre de quille tombée
            this.tries.push(quillesDown);
            //si on est pas dans la dernière frame
            if(!this.bonus) {
                // si on est pas dans la dernière frame
                if(this.pinsKnowked ===10) {
                    // si on a fait tomber 10 quilles sur un essai , alors c est un strike
                    this.isStrike = this.tries.length ==1;
                    // si on a fait tomber 10 quilles sur deux essai , alors c est un spare
                    this.isSpare = this.tries.length ==2;
                }
                if(this.tries.length ==2 || this.isStrike) {
                    // si on a fait deux essais dans toute les frames sauf la dernière ou qu'on a fait un strike alors la frame est terminée
                    this.closed = true;
                }
            }
        };

        /**
         *  calcul des points de la Frame
         * @returns {integer} somme des quilles tombées
         */
        bowlingFrame.prototype.getPoints = function () {
            return this.pinsKnowked;
        };

        return bowlingFrame;
    }
})();