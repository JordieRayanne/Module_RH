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

-- DATA
-- Ajouter des données à la table 'service'
insert into service (nom) values ('Ressources Humaines');
insert into service (nom) values ('Marketing');

-- Ajouter des données à la table 'profil'
insert into profil (idservice,nom,description) values (1,'Developpeur junior','Devellopeur dynamique et rigoureux.');
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

-- Ajouter des données à la table 'critere_CV'
insert into critere_CV (idprofil, diplome, dipcoeff, experience, expcoeff) values (1, 'Bac+2', 3, '2 ans de développement web', 5);
insert into critere_CV (idprofil, diplome, dipcoeff, experience, expcoeff) values (2, 'Bac+4', 4, '5 ans d expérience en analyse marketing', 7);
insert into critere_CV (idprofil, diplome, dipcoeff, experience, expcoeff) values (3, 'Bac+5', 5, '8 ans d expérience en développement web', 9);


create table questionnaire(
    id serial primary key,
    idprofil integer references profil,
    question varchar(1000),
    point numeric(10, 2)
);
-- ALTER table questionnaire RENAME COLUMN reponses TO reponse;://pour renommer une colonne
ALTER table questionnaire DROP COLUMN reponse;

create table reponse_vraies(
    id serial primary key,
    idquestion integer references questionnaire,
    reponse varchar(1000)
);
insert into reponse_vraies (idquestion,reponse) values (1,'Bac+2');

create table options_reponse(
    id serial primary key,
    idquestion integer references questionnaire,
    option_text varchar(1000)
);


--  DATA FOR questionnaire and options_reponse
-- Ajouter des données à la table 'questionnaire'
insert into questionnaire (idprofil, question, reponse, point) values (1, 'Quel est votre niveau d''études?', 'Bac+2', 3);
insert into questionnaire (idprofil, question, reponse, point) values (1, 'Avez-vous une expérience en développement web?', 'Oui', 5);
insert into questionnaire (idprofil, question, reponse, point) values (2, 'Quel est votre niveau d''études?', 'Bac+4', 4);
insert into questionnaire (idprofil, question, reponse, point) values (2, 'Combien d''années d''expérience avez-vous en analyse marketing?', '5 ans', 7);
insert into questionnaire (idprofil, question, reponse, point) values (3, 'Quel est votre niveau d''études?', 'Bac+5', 5);
insert into questionnaire (idprofil, question, reponse, point) values (3, 'Combien d''années d''expérience avez-vous en développement web?', '8 ans', 9);

update questionnaire set question='Quel est votre niveau etudes' where id=5;
-- Ajouter des données à la table 'options_reponse'
insert into options_reponse (idquestion, option_text) values (1, 'Moins de 1 an');
insert into options_reponse (idquestion, option_text) values (1, '1-3 ans');
insert into options_reponse (idquestion, option_text) values (1, '3-5 ans');
insert into options_reponse (idquestion, option_text) values (1, 'Plus de 5 ans');

insert into options_reponse (idquestion, option_text) values (2, 'Moins de 1 an');
insert into options_reponse (idquestion, option_text) values (2, '1-3 ans');
insert into options_reponse (idquestion, option_text) values (2, '3-5 ans');
insert into options_reponse (idquestion, option_text) values (2, 'Plus de 5 ans');

insert into options_reponse (idquestion, option_text) values (4, 'Moins de 1 an');
insert into options_reponse (idquestion, option_text) values (4, '1-3 ans');
insert into options_reponse (idquestion, option_text) values (4, '3-5 ans');
insert into options_reponse (idquestion, option_text) values (4, 'Plus de 5 ans');

insert into options_reponse (idquestion, option_text) values (5, 'Moins de 1 an');
insert into options_reponse (idquestion, option_text) values (5, '1-3 ans');
insert into options_reponse (idquestion, option_text) values (5, '3-5 ans');
insert into options_reponse (idquestion, option_text) values (5, 'Plus de 5 ans');

insert into options_reponse (idquestion, option_text) values (6, 'Moins de 1 an');
insert into options_reponse (idquestion, option_text) values (6, '1-3 ans');
insert into options_reponse (idquestion, option_text) values (6, '3-5 ans');
insert into options_reponse (idquestion, option_text) values (6, 'Plus de 5 ans');
-- -----------------------END------------------------------------------------------



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

