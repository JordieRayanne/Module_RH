CREATE TABLE "absence" (
  "id" serial,
  "id_personnel" int,
  "id_motif" int,
  PRIMARY KEY ("id")
);

CREATE TABLE "avantage" (
  "id" serial,
  "type" varchar(255),
  PRIMARY KEY ("id")
);

CREATE TABLE "candidat" (
  "id" serial,
  "nom" varchar(255),
  "prenom" varchar(255),
  "date_naissance" date,
  "sexe" varchar(255),
  "cin" bigint,
  "mere" varchar(255),
  "pere" varchar(255),
  "situation_matrimonial" varchar(255),
  "email" varchar(255),
  "adresse" varchar(255),
  "mot_de_passe" varchar(255),
  PRIMARY KEY ("id")
);

CREATE TABLE "candidat_embauche" (
  "id" serial,
  "id_candidat" int, 
  PRIMARY KEY ("id")
);

CREATE TABLE "categorie" (
  "id" serial,
  "nom" varchar(255),
  PRIMARY KEY ("id")
);

CREATE TABLE "cnaps" (
  "id" serial,
  "id_candidat_embauche" int,
  PRIMARY KEY ("id")
);

CREATE TABLE "conge_personnel" (
  "id" serial,
  "id_personnel" int,
  "jours_conge" decimal,
  "jours_specifique" decimal(10,2),
  "date" date,
  PRIMARY KEY ("id")
);

CREATE TABLE "contrat_essaie" (
  "id" serial,
  "id_candidat_embauche" int NOT NULL,
  "date_debut" date,
  "date_fin" date,
  "id_salaire" int,
  "montant_salaire" decimal(10,2),
  "id_profil" int,
  "id_avantage" int,
  "date_essaie" date,
  "etat" int,
  PRIMARY KEY ("id")
);

CREATE TABLE "contrat_vraie" (
  "id" serial,
  "date" date,
  "id_essaie" int,
  PRIMARY KEY ("id")
);

CREATE TABLE "demande_conge" (
  "id" serial,
  "id_personnel" int,
  "date_demande" date,
  "date_debut" date,
  "date_fin" date,
  "etat" int2,
  PRIMARY KEY ("id")
);

CREATE TABLE "embauche_organisme" (
  "id" serial,
  "id_embauche" int,
  "id_organisme_sanitaire" int,
  PRIMARY KEY ("id")
);

CREATE TABLE "motif_absence" (
  "id" serial,
  "motif" varchar(255),
  PRIMARY KEY ("id")
);

CREATE TABLE "option_reponse" (
  "id" serial,
  "id_question" int,
  "option_reponse" varchar(255),
  PRIMARY KEY ("id")
);

CREATE TABLE "organisme_sanitaire" (
  "id" serial,
  "nom" varchar(255),
  PRIMARY KEY ("id")
);

CREATE TABLE "personnels" (
  "id" serial,
  "id_embauche" int,
  PRIMARY KEY ("id")
);

CREATE TABLE "profil" (
  "id" serial,
  "id_service" int,
  "id_categorie" int,
  "description" varchar(255),
  PRIMARY KEY ("id")
);

CREATE TABLE "profilage" (
  "id" serial,
  "id_profil" int,
  "nombre" int,
  PRIMARY KEY ("id")
);

CREATE TABLE "questionnaire" (
  "id" serial,
  "id_profil" int,
  "question" varchar(255),
  "point" numeric,
  PRIMARY KEY ("id")
);

CREATE TABLE "reponse_vraie" (
  "id" serial,
  "id_question" int,
  "reponse" varchar(255),
  PRIMARY KEY ("id")
);

CREATE TABLE "salaire" (
  "id" serial,
  "type" varchar(255),
  PRIMARY KEY ("id")
);

CREATE TABLE "service" (
  "id" serial,
  "nom" varchar(255),
  "adresse" varchar(255),
  PRIMARY KEY ("id")
);

CREATE TABLE "subordonne" (
  "id" serial,
  "id_personnel" int,
  "id_subordonne" int,
  PRIMARY KEY ("id")
);

ALTER TABLE "absence" ADD FOREIGN KEY ("id_motif") REFERENCES "motif_absence" ("id");
ALTER TABLE "candidat_embauche" ADD CONSTRAINT "id_candidat" FOREIGN KEY ("id_candidat") REFERENCES "candidat" ("id");
ALTER TABLE "cnaps" ADD FOREIGN KEY ("id_candidat_embauche") REFERENCES "candidat_embauche" ("id");
ALTER TABLE "conge_personnel" ADD FOREIGN KEY ("id_personnel") REFERENCES "personnels" ("id");
ALTER TABLE "contrat_essaie" ADD CONSTRAINT "id_candidat_embauche" FOREIGN KEY ("id_candidat_embauche") REFERENCES "candidat_embauche" ("id");
ALTER TABLE "contrat_essaie" ADD CONSTRAINT "id_salaire" FOREIGN KEY ("id_salaire") REFERENCES "salaire" ("id");
ALTER TABLE "contrat_essaie" ADD CONSTRAINT "id_profil" FOREIGN KEY ("id_profil") REFERENCES "profil" ("id");
ALTER TABLE "contrat_essaie" ADD CONSTRAINT "id_avantage" FOREIGN KEY ("id_avantage") REFERENCES "avantage" ("id");
ALTER TABLE "contrat_vraie" ADD FOREIGN KEY ("id_essaie") REFERENCES "contrat_essaie" ("id");
ALTER TABLE "demande_conge" ADD FOREIGN KEY ("id_personnel") REFERENCES "personnels" ("id");
ALTER TABLE "embauche_organisme" ADD FOREIGN KEY ("id_embauche") REFERENCES "candidat_embauche" ("id");
ALTER TABLE "embauche_organisme" ADD FOREIGN KEY ("id_organisme_sanitaire") REFERENCES "organisme_sanitaire" ("id");
ALTER TABLE "option_reponse" ADD FOREIGN KEY ("id_question") REFERENCES "questionnaire" ("id");
ALTER TABLE "personnels" ADD FOREIGN KEY ("id_embauche") REFERENCES "candidat_embauche" ("id");
ALTER TABLE "profil" ADD CONSTRAINT "id_service" FOREIGN KEY ("id_service") REFERENCES "service" ("id");
ALTER TABLE "profil" ADD CONSTRAINT "id_categorie" FOREIGN KEY ("id_categorie") REFERENCES "categorie" ("id");
ALTER TABLE "profilage" ADD FOREIGN KEY ("id_profil") REFERENCES "profil" ("id");
ALTER TABLE "questionnaire" ADD FOREIGN KEY ("id_profil") REFERENCES "profil" ("id");
ALTER TABLE "reponse_vraie" ADD FOREIGN KEY ("id_question") REFERENCES "questionnaire" ("id");
ALTER TABLE "subordonne" ADD FOREIGN KEY ("id_personnel") REFERENCES "personnels" ("id");
ALTER TABLE "subordonne" ADD FOREIGN KEY ("id_subordonne") REFERENCES "subordonne";


