CREATE view personnels_view as
SELECT p.id, 
       c.nom, 
       c.prenom, 
       c.date_naissance, 
       c.sexe, 
       c.cin, 
       c.mere,  
       c.pere, 
       c.situation_matrimonial, 
       c.email, 
       c.adresse 
FROM personnels p
JOIN candidat_embauche e ON p.id_embauche = e.id
JOIN candidat c ON e.id_candidat = c.id;

CREATE view question_reponse_view as
SELECT 
    q.id AS id_question,
    q.question,
    q.point,
    q.id_profil,
    'Vraie' AS type_reponse,
    r.reponse AS option_reponse
FROM 
    questionnaire q
LEFT JOIN 
    reponse_vraie r 
ON 
    q.id = r.id_question

UNION ALL

SELECT 
    q.id AS id_question,
    q.question,
    q.point,
    q.id_profil,
    'Fausse' AS type_reponse,
    o.option_reponse
FROM 
    questionnaire q
LEFT JOIN 
    option_reponse o 
ON 
    q.id = o.id_question;
