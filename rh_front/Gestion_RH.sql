Create database gestion_rh;
\c gestion_rh;

create table service(
    id serial primary key,
    nom varchar(30)
);

insert into service (nom) values ('Informatique');
insert into service (nom) values ('Technique');

create table volume(
    id serial primary key,
    nom varchar(30)
);

insert into volume (nom) values ('Horaire');
insert into volume (nom) values ('Homme jour');

create table service_volume(
    idservice integer references service,
    idvolume integer references volume
);

create table profil(
    id serial primary key,
    idservice integer references service,
    nom varchar(30),
    description varchar(1000)
);

insert into profil (idservice,nom,description) values (1,'Developpeur junior','Devellopeur dynamique et rigoureux.');

-- DATA
-- Ajouter des données à la table 'service'
insert into service (nom) values ('Ressources Humaines');
insert into service (nom) values ('Marketing');

-- Ajouter des données à la table 'profil'
insert into profil (idservice, nom, description) values (4, 'Analyste Marketing', 'Analyste marketing expérimenté avec de fortes compétences analytiques.');
insert into profil (idservice, nom, description) values (1, 'Developpeur Senior', 'Développeur expérimenté spécialisé dans les technologies web.');
-- update profil set nom='Developpeur Senior' where id=3;

create table profilage(
    idprofil integer references profil,
    nombre integer
);

create table candidat(
    id serial primary key,
    idprofil integer references profil,
    nom varchar(30),
    prenom varchar(30),
    email varchar(50),
    mdp varchar(20),
    note decimal
);

create table critere_CV(
    id serial primary key,
    idprofil integer references profil,
    diplome varchar(10),
    dipcoeff int,
    experience varchar(1000),
    expcoeff int
);

create table questionnaire(
    id serial primary key,
    idcritere integer references critere_CV,
    question varchar(1000),
    reponses varchar(1000),
    point int
);

create table cv_canditat(
    id serial primary key,
    idcanditat integer references candidat,
    diplome varchar(1000),
    experience varchar(1000)
);

create table test_candidat(
    id serial primary key,
    idcanditat integer references candidat,
    question varchar(1000),
    reponses varchar(1000),
    point int
);

create table candidat_accepte(
    id serial primary key,
    idcanditat integer references candidat
);

