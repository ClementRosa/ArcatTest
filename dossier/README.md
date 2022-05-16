
La réponse écrite pour le test Arca computing. Le but du projet est de créer de la visualisation d'un gros volume de donnée. 

## Patterns
    
### React : 
    Création d'un dashboard qui va centraliser et gérer l'ensemble des informations ou données échangées avec les enfants (Courbe, barre et menu). Il aura la gestion de l'ensemble des handler et des appels à l'api pour récupérer les données. 
    Création d'un menu dans lequel on va pouvoir inclure les boutons utilent aux intéractions avec les charts.
    Création d'une api qui va pouvoir retourner les données en JSON de MongoDB
    Le but étant de loader le plus rapidement les données, c'est pourquoi je pense utiliser le côté du rendu static de NextJS pour générer la plage d'année la plus demandée. 


## Stack technique 

### Script : 
    Python, langague le plus couramment utilisé pour traiter le Big data. Il y a aussi Java mais j'avais envie de refaire du python.

### Dataframe : 
    Pandas, utilisation de pandas pour la gestion des dataframes et permettre de charger paquet par paquet les données sans passer par la RAM.  

### Persistance : 
    MongoDB, choix d'une DB en Nosql pour traiter des problématiques de Big data, souvent plus rapide que des DB relationnel. MongoDB est à mon sens le plus polyvalent. On aurait aussi pu utiliser Cassandra, mais pas elasticsearch qui va souvent avec une stack ELK pour le traitement de log par exemple.  

### Front / Back : 
    NextJS , nouveau framework prometteur qui permet de faire du back et du front sur un même projet. Là encore c'est l'occasion d'un test pour tester de nouveau framework. Le rendu côté serveur en static peut être une bonne approche pour proposer au client le plus rapidement possible les données. De plus NextJS importe native un serveur de développement avec le fast reload. 

### Package : 
    Yarn, qui se déploie plus rapidement que NPM et qui a des features supplémentaires comme Plug'n'Play et Zero installs.  

### CSS : 
    Tailwind pour la gestion des colonnes, j'aurais aussi pu utiliser Material ui.

### Chart : 
    Recharts, qui est très basique. Je l'ai utilisé ici pour apprendre. Pour du big data je me serais plutôt tourné vers CanvasJS qui est une solution payante mais qui propose une grande variété de chart et qui sont vraiment optimisés pour afficher un grand volume de données. 

### Versionning : 
    Git, utilisé avec les bonnes pratiques de commit inspiré directement du répository d'Angular du CONTRIBUTING.md. Utilisation du GitFlows.  

## Stack technique à venir

### Bonne pratique 
    Eslint, ajouter une configuration pour travailler en équipe. NextJS importe nativement eslint avec un core web vital déjà configuré.  

### Test : 
    Jest pour les tests unitaires et / ou Playwright pour les tests end to end. Je partirais dans un premier temps sur Jest qui le plus utile.

### API : 
    Swagger pour mettre en place la documentation des endpoints. 

### Deploiement : 
    Plusieurs solutions pour le déploiement, la plus simple est de déployer à partir des serveurs de Vercel qui édite le framework NextJS ou sinon passer par un déploiement avec un conteneur docker. Là encore NextJS facilite le déploiement car l'on peut build l'application, ce qui va générer les données statics du serveur et apporter un gain de performance sur les pages static. 
    Pour MongoDB on peut utiliser Atlas qui est la solution d'hébergement cloud dédié. 

## Difficulté rencontrées

Pas de connaissance sur le dataset, comme "d'où proviennent les données ?" "changent-elles ou sont-elles statiques une fois générées". Peu de connaissances sur la gestion de big data, je n'ai donc pas vraiment de référence pour savoir si mon script est performant ou non. Pour résoudre ce souci j'aurais effectué une demande de mentoring pour avoir un interlocuteur qui me permettrait de cadrer le projet pour partir sur les bonnes technologies et pratiques. Et si possible voire pour suivre une formation sur le sujet. 
Par exemple je me suis demandé si ce n'était pas mieux de créer une collection par année. 

Je me suis aperçus assez tard que l'epoch était en 13 digit et non 10 digit. Car je n'avais pas connaissance du dataset alors je me suis dit que c'était des données random. Ce qui me fait penser au bug de l'an 2038 sur cette différence de digit. De plus il ne semble pas avoir besoin des heures minutes secondes c'est pourquoi j'ai préféré ajouter une date pour améliorer les recherches en BDD. 

## Méthodologie de travail
    1. Analyse des données et comprendre ce que l'on traite
    2. Recherche et apprentissage de la stack technique
    3. Découpage du projet en tache 
    4. Réalisation des design avant leur intégration
    5. Codage du script pour avoir des données à traiter
    6. Codage du front / back 

Dans un premier temps question sur le dataset pour comprendre ce que l'on traite. Analyse des données, voir si l'on n'a pas besoin d'ajouter des colonnes comme une date. Découpage du projet en tache. 


### Gestion de projet :
    GitKraken avec une gestion de type Kanban board pour la gestion des tâches. Habituellement j'utilise l'ensemble de la suite Atlassian avec Jira pour la gestion projet, Bitbucket pour les repository, Confluence pour la documentation. 


## Optimisation v2 

Dataframe : Test dans un second de la commande mongoimport ou mettre en plus du multithreading. 

