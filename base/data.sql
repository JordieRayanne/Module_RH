------------------------------------ SERVICE -----------------------------------------------------------------------------
insert into service (nom) values ('Informatique');
insert into service (nom) values ('Technique');

------------------------------------ VOLUME ------------------------------------------------------------------------------
insert into volume (nom) values ('Horaire');
insert into volume (nom) values ('Homme jour');

------------------------------------ PROFIL ------------------------------------------------------------------------------
insert into profil (idservice,nom,description) values (1,'Developpeur junior','Devellopeur dynamique et rigoureux.');

------------------------------------ DIPLOME -----------------------------------------------------------------------------
insert into diplome (nom,valeur) values ('License',3);
insert into diplome (nom,valeur) values ('Master I',6);
insert into diplome (nom,valeur) values ('Master II',9);
insert into diplome (nom,valeur) values ('Doctorat',15);

------------------------------------ EXPERIENCE -------------------------------------------------------------------------
insert into experience (nom) values ('+ 3 ans');
insert into experience (nom) values ('- 3 ans');
insert into experience (nom) values ('Aucun');

------------------------------------ SITUATION MATRIMONIALE --------------------------------------------------------------
insert into situation_matrimoniale (nom) values ('Veuf(ve)');
insert into situation_matrimoniale (nom) values ('Libre');
insert into situation_matrimoniale (nom) values ('Marié(ée)');

------------------------------------ SEXE --------------------------------------------------------------------------------
insert into sexe (nom) values ('Homme');
insert into sexe (nom) values ('Femme');

----------------------------------- LANGUE -------------------------------------------------------------------------------
insert into langue (nom) values ('Anglais');
insert into langue (nom) values ('Francais');
insert into langue (nom) values ('Malagasy');

