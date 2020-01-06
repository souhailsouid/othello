This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br/>
Projet Othello - Session final - Souhail<br/>
## Technologies utilisé: 
Front:<br/>
Framework: React,<br/>
Framework: react-boostrap,<br/>
<br/>
Back (server):<br/>
Node.js - express.js,<br/>
Base de donnée NoSql: MongoDB Atlas<br/>
Authentification faite en JsonWebToken<br/>

### Mode d'emploi 
Depuis ce repertoire veuillez tout d'abord faire npm install:
## 1er etape `npm install`
Installe l'ensemble des packages requis pour le fonctionnement de l'application.
## 2nd etape `Cote serveur
La variable d environnement permettant de lier sa base de donnée  mongoAtlas se trouve dans  la racine du dossier server.<br/>
Créer un fichier .env à la racine du dossier server:<br/> 
Veuillez copier cette exemple dans votre fichier .env<br/>
MONGODB_URI="mongodb+srv://souhail:souhail@cluster0-dryle.mongodb.net/test?retryWrites=true&w=majority"<br/>

<br/>
Vous pouvez  modifier la propriété MONGODB_URI comme ci dessous : <br/>
MONGODB_URI="mongodb+srv://toto:souhail@cluster0-dryle.mongodb.net/test?retryWrites=true&w=majority"<br/>
PS: Le lien doit être en provenance d'une base de donnée mangoDB atlas.


### `DEMARRAGE DE L'APPLICATION FRONT`
## `npm start`
Lance l'application.<br />
Veuillez faire un npm start depuis la racine. L'application se lancera.<br/>
Inscrire l'url suivante dans votre navigateur: [http://localhost:9000](http://localhost:9000) ;
## `npm test`

Lance les test.<br />
Important: 
Pas de test disponible dans l'application.




