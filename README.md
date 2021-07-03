
#  Meteo-app

  

Réalisation d'une application web de météo en VueJS.

-  Possibilité de chercher la météo d'une ville ;

-  Vue détaillée de la météo (Actuelle, sur plusieurs jours, toutes les infos que tu peux trouver);

-  Possibilité de rajouter des villes aux favoris et avoir accès à la météo de ces villes ;

-  Utilisation de l'API de ton choix (tu en trouveras en ligne gratuitement).


Les contraintes sont les suivantes :

-  Utilisation de VueJS ;

-  Utilisation de Vuex ;

-  Pour les calls, utilisation d'axios ou de vue-router.

 
Pour le css, je te laisse choisir ce que tu veux. Tu peux utiliser bootstrap ou bien faire ton propre css, mais il faut que ce soit beau (important !). Tu peux également implémenter un module de traduction anglais/français si tu le souhaites.

  
Finalement, c'est l'occasion de montrer tes talents de développeur, donc si tu as une idée à laquelle je n'aurais pas pensé, tu peux bien évidemment rajouter des modules 😊
  

#  Difficultées

J'ai eu beaucoup de soucis avec les différentes API mise à disposition.

Il manquait parfois de contenu, d'information, parfois elles ne fonctionnaient pas du tout et j'ai du recommencer 3 ou 4 fois avec des API différentes à chaque fois.

  
L'API que j'ai choisi est la suivante : https://www.weatherapi.com/
J'utilise la version gratuite et je suis donc limité à la prédiction des 3 prochains jours.

J'ai également eu du mal à faire en sorte de sauvegarder les favoris dans le localstorage de l'utilisateur. En effet, le localstorage ne peut contenir que des élements de type "String". J'ai donc fait en sorte d'adapter toutes mes fonctions à cela mais quand je pensais avoir terminé, je n'arretais pas d'être confronté à de nouveaux bugs. J'ai donc choisi de ne pas implémenter cette fonctionnalité afin d'éviter de laisser des bugs sur le site.

# Idées d'améliorations

J'ai évidemment pleins d'idées pour améliorer encore plus ce projet :
 
 - Ajouter la prédiction pour chaque heure de la journée
 - Sauvegarder les favoris dans une base de donnée ou le localStorage du navigateur
 - Ajouter des images animé en fonction de la météo et de l'heure de la journée
 - Afficher plus d'informations pour l'utilisateur
 - Retravailler les couleurs
 - Ajouter une gestion des erreurs quand on saisie un ville inexistante
 

