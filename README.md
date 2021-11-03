![Image of Groupomania](https://user.oc-static.com/upload/2019/09/04/15676009353158_image2.png)

# [OCRs Projet 7] Créez un réseau social d’entreprise

Le projet consiste à construire un réseau social interne pour les employés de Groupomania. Le but de cet outil est de faciliter les interactions entre collègues. Le département RH de Groupomania a laissé libre cours à son imagination pour les fonctionnalités du réseau et a imaginé plusieurs briques pour favoriser les échanges entre collègues.

Voici les exigences émises par le comité de pilotage :

- la présentation des fonctionnalités doit être simple ;
- la création d’un compte doit être simple et possible depuis un téléphone mobile ;
- le profil doit contenir très peu d’informations pour que sa complétion soit rapide ;
- la suppression du compte doit être possible ;
- l’accès à un forum où les salariés publient des contenus multimédias doit être présent ;
- l’accès à un forum où les salariés publient des textes doit être présent ;
- les utilisateurs doivent pouvoir facilement repérer les dernières participations des employés ;
- le ou la chargé-e de communication Groupomania doit pouvoir modérer les interactions entre

---

### Objectifs et Compétences évaluées

Le but est de créer le backend de l'application, le frontend étant déjà codé et fourni.

[x] Utilisation d'un framework JavaScript au choix (VueJs)
[x] Authentifier un utilisateur et maintenir sa session
[x] Personnaliser le contenu envoyé à un client web
[x] Gérer un stockage de données à l'aide de SQL
[x] Implémenter un stockage de données sécurisé en utilisant SQL
[x] Respecter les standards WCAG

### Fonctionnalités

[x] L'application est responsive
[x] L'utilisateur peut créer son profil
[x] L'utilisateur peut se logger et maintenir sa connection
[x] L'utilisateur peut créer un post avec du texte et/ou une image
[x] L'utilisateur peut modifier son post (text et/ou image)
[x] L'utilisateur peut supprimer son post
[x] L'utilisateur peut mettre à jour son profil (photo de profil, bio, email)
[x] L'utilisateur peut supprimer son profil
[x] L'utilisateur peut ajouter un "like" sur les publications
[x] L'utilisateur peut supprimer ses "like"
[x] L'utilisateur peut ajouter des commentaires sur les publications
[x] L'utilisateur peut supprimer ses commentaires
[x] L'administrateur peut modérer les posts, commentaires, et profils des utilisateurs

### API REST

- Sécurité OWASP et RGPD

---

### Instructions & Requirements

- [requirements](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P7/Groupomania_Specs_FR_DWJ_VF.pdf)

### Contenus de ce repository

Ce repo contient les deux dossiers Frontend et Backend. Vous pouvez cloner ce repository pour récupérer en local les deux parties Front et Back de l'application.

---

### Installation

- Cloner ce projet depuis GitHub.

#### Faire tourner le Frontend

- `npm install` => installer les dépendencies.
- `npm run serve` => avoir accès au serveur de développement.

#### Faire tourner le Backend

- `npm install` => installer les dépendencies.
- `nodemon server` => lancer le server.

---

### Technologies et outils utilisés dans ce projet

- Framework: VueJs
- Javascript
- NodeJS
- Framework: Express
- Mysql
- Sequelize ORM
- Npm
- Postman

### Base de données

Se connecter au serveur MySql de votre choix. Exécuter la commande:
`CREATE DATABASE groupomania;`
Vérifiez les identifiants dans le fichier config.json du dossier Backend puis importer le fichier groupomania.sql s'il vous a été fourni :
`mysql -u root -p groupomania < groupomania.sql`
