# KataBowling


## Objectif


Le but de ce kata est de calculer le nombre total de points au Bowling

www.topendsports.com/sport/tenpin/scoring.htm

C'est le calcul des points en cas de strike ou de spare qui rend le projet instructif.


## Architeture

Pour moi, le but était d'utiliser AngularJS et de demontrer que l'encapsulation des données
et la responsabilités pouvait être clairement identifiée entre chaque classe du projet.

La classe Game n'est pas spécifique au jeu de Bowling. Dans tout les jeux, on marque des points
et on souhaite connaitre le nombre de points final.

Elle délègue donc le travail à la classe LogicBowling (lien de composition)
qui s'acquite du marquage et du calcul des points selon les règles spécifiques du jeu de Bowling.

Pour ce faire , la classe LogicBowling utilise 10 instances de bowlingFrame (lien d'aggregation)
qui stokent les données relative à une Frame dans le jeu de Bowling.



## Dev 

dans https://github.com/christopheGaon/test/tree/master/bowling/app/scripts

on retrouve notre projet et dans game les trois fichiers correspondant aux classes 


## Testing

Running `grunt test` will run the unit tests with karma.

dans https://github.com/christopheGaon/test/tree/master/bowling/test/spec

on retrouve les fichiers de testUnitaire qui test le projet

gameSpec test le jeu de Bowling en reprenant les tests du kata

