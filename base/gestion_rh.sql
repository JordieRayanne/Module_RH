Create database gestion_rh;
\c gestion_rh;

create table service(
    id serial primary key,
    nom varchar(30)
);

create table volume(
    id serial primary key,
    nom varchar(30)
);

create table service_volume(
    id serial primary key,
    idservice integer references service,
    idvolume integer references volume
);

create table profil(
    id serial primary key,
    idservice integer references service,
    nom varchar(30),
    description varchar(1000)
);

create table profilage(
    idprofil integer references profil,
    nombre int
);

create table candidat(
    id serial primary key,
    nom varchar(100),
    prenom varchar(100),
    date_naissance date,
    sexe varchar(10),
    CIN bigint,
    mere varchar(100),
    pere varchar(100),
    nbr_enfant int,
    email varchar(30),
    mdp varchar(30)
);

create table questionnaire(
    id serial primary key,
    idprofil integer references profil,
    question varchar(1000),
    reponses varchar (1000),
    point int
);

create table question(
    id serial primary key,
    idquestion integer references questionnaire,
    reponses varchar(1000)
);

create table diplome(
    id serial primary key,
    nom varchar(30),
    valeur int
);

create table experience(
    id serial primary key,
    nom varchar(30)
);

create table situation_matrimoniale(
    id serial primary key,
    nom varchar(30)
);

create table sexe(
    id serial primary key,
    nom varchar(10)
);

create table langue(
    id serial primary key,
    nom varchar(30)
);

create table critere_CV(
    id serial primary key,
    idprofil integer references profil,
    iddiplome integer references diplome,
    coeff_diplome int,
    idexperience integer references experience,
    coeff_experience int,
    idSM integer references situation_matrimoniale,
    coeff_SM int,
    idsexe integer references sexe,
    coeff_sexe int,
    idlangue integer references langue,
    coeff_langue int
);

create table cv_canditat(
    id serial primary key,
    idprofil integer references profil,
    idcanditat integer references candidat,
    iddiplome integer references diplome,
    idexperience integer references experience,
    idSM integer references situation_matrimoniale,
    idsexe integer references sexe,
    idlangue integer references langue
);

create table questionnaire_candidat(
    id serial primary key,
    idservice integer references service,
    idprofil integer references profil,
    idcanditat integer references candidat,
    idquestionnaire integer references questionnaire,
    reponses varchar(100),
    point int
);

create table cv( 
    id serial primary key,
    idprofil integer references profil,
    idcvcritere integer references critere_CV,
    idcvcanditat integer references cv_canditat,
    note decimal
);

create table postule_candidat(
    id serial primary key,
    idservice integer references service,
    idprofil integer references profil,
    idcanditat integer references candidat
);

create table cv_valider( --raha toa ka valider ny cv an'ity candidat ty dia misy message hoe "Vous avez ete accepte" 
    id serial primary key,
    idcanditat integer references candidat,
    idcv integer references cv
); 

create table cv_refuser(
    id serial primary key,
    idcv integer references cv
);

create table candidat_accepte(
    id serial primary key,
    idcanditat integer references candidat
);

create table candidat_refuser(
    id serial primary key,
    idcanditat integer references candidat
);

