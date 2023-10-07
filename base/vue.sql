----------------------- View Annonce --------------------------------------------------------------
CREATE VIEW V_annonce AS
SELECT
    service.id AS idservice,
    service.nom AS service,
    volume.id AS idvolume,
    volume.nom AS volume,
    service_volume.id AS idSV,
    profil.id AS idprofil,
    profil.nom AS profil,
    profil.description AS description,
    profilage.nombre AS nombre
FROM
    service
INNER JOIN
    service_volume ON service_volume.idservice = service.id
INNER JOIN
    volume ON volume.id = service_volume.idvolume
INNER JOIN
    profil ON profil.idservice = service.id
INNER JOIN
    profilage ON profilage.idprofil = profil.id;

---------------------- View CV -------------------------------------------------------------------
CREATE VIEW cv_view AS
SELECT
    service.id AS idservice,
    service.nom AS service,
    profil.id AS idprofil,
    profil.nom AS profil,
    candidat.id AS idcandidat,
    candidat.nom AS nom,
    candidat.prenom AS prenom,
    candidat.date_naissance AS date_naissance,
    diplome.id AS iddiplome,
    diplome.nom AS diplome,
    diplome.valeur AS diplome_valeur,
    experience.id AS idexperience,
    experience.nom AS experience,
    situation_matrimoniale.id AS idSM,
    situation_matrimoniale.nom AS situation_matrimoniale,
    sexe.id AS idsexe,
    sexe.nom AS sexe,
    langue.id AS idlangue,
    langue.nom AS langue, 
    critere_CV.id AS idCCV,
    critere_CV.coeff_diplome AS coeff_diplome,
    critere_CV.coeff_experience AS coeff_experience,
    critere_CV.coeff_SM AS coeff_SM,
    critere_CV.coeff_sexe AS coeff_sexe,
    critere_CV.coeff_langue AS coeff_langue,
    cv_canditat.id AS idCVCandidat
FROM 
    critere_CV
INNER JOIN 
    profil ON profil.id = critere_CV.idprofil
INNER JOIN 
    service ON service.id = profil.idservice
INNER JOIN 
    cv_canditat ON cv_canditat.idprofil = profil.id
INNER JOIN 
    candidat ON candidat.id = cv_canditat.idcanditat
INNER JOIN 
    diplome ON diplome.id = critere_CV.iddiplome
INNER JOIN 
    experience ON experience.id = critere_CV.idexperience
INNER JOIN 
    situation_matrimoniale ON situation_matrimoniale.id = critere_CV.idSM
INNER JOIN 
    sexe ON sexe.id = critere_CV.idsexe
INNER JOIN 
    langue ON langue.id = critere_CV.idlangue;

