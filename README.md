# API de posts, en Node.js, avec l'utilisation de PostgreSQL

Tout d'abord, cette API est réalisée dans le but d'un projet à l'EPSI.
Ce projet consiste à la création d'une API permettant de gérer des `posts`, pour un réseau social
Il sera mis en corrélation avec plusieurs autres API (notamment de `likes`, `commentaires`, `photos` 
et `utilisateurs`), développées par d'autres membres de notre équipe. Enfin, ce projet ira de pair, dans un
futur proche, avec une interface mobile qui sera développé par la suite, par notre équipe.
Celui-ci a pour but principal, de pouvoir effectuer des tests sur le code de cette API.

## Pré-requis

- Node.js
- PostgreSQL

## Pour commencer 

- Installer Node.js et PostgreSQL.

- Ouvrir un terminal et lancer PostrgreSQL.
- Créer un rôle entrant dans le terminal :  


      CREATE ROLE <votre nom de role> WITH LOGIN PASSWORD '<votre password>';

- Donner les droits de créations de bases de données au rôle avec :

 
        ALTER ROLE <votre nom de role> CREATEDB;

- Connecter postgres au rôle : `psql -d postgres -U <votre nom de role>`.
- Créer une base de données :


        CREATE DATABASE <Le nom de votre base de données>;

- Enfin, créer la table suivante :  
  
    
        CREATE TABLE posts (id serial NOT NULL,  
        id_user INT NOT NULL,  
        title varchar(50) NOT NULL,  
        description varchar(500) NOT NULL,  
        created_at timestamp with time zone DEFAULT now());  

- Quitter le terminal.
- Ajouter un fichier `.env` à la racine du projet et y ajouter la structure suivante :



        PGHOST=<votre host>(par exemple localhost)  
        PGPORT=<votre port>(par exemple 3000)  
        PGDATABASE=<Le nom de votre base de données>  
        PGUSER=<votre nom de role>  
        PGPASSWORD=<votre password>  
        SERVERPORT=<votre port serveur> (par exemple 8080)  

- Puis, à la racine du projet, effectuer la commande `npm install`.


## Utilisation

- À la racine, utiliser la commande `npm run dev` qui lance l'API.

## Postman

Un fichier `social-network.postman_collection.json` est disponible dans le répertoire Postman
et permet d'importer, dans votre espace de travail, les paramètres afin de pouvoir effectuer des
requêtes, pour pouvoir tester l'API. Il suffit de sélectionner le bouton `import` et d'importer 
le fichier JSON. 

## Tests

Il vous suffit d'éxécuter la commande `npm test` à la racine du projet.

## Fabriqué avec

* [Node.js](https://nodejs.org/fr/) - Environnement d’exécution
* [Postman](https://www.postman.com/) - Application de test d'API
* [Intellij IDEA](https://www.jetbrains.com/fr-fr/idea/) - IDE
* [PhpStorm](https://www.jetbrains.com/fr-fr/phpstorm/) - IDE

## Auteurs
* **[Aimeric Sorin](https://github.com/EtienneLep)**
* **[Etienne Lepetit](https://github.com/aimeric-sr)**

