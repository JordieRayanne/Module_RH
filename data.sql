INSERT INTO "absence" ("id_personnel", "id_motif")
VALUES (1, 1),
       (2, 2),
       (3, 1);

INSERT INTO "avantage" ("type")
VALUES ('Assurance santé'),
       ('Congés payés'),
       ('Bonus annuel');

INSERT INTO "candidat" ("nom", "prenom", "date_naissance", "sexe", "cin", "mere", "pere", "situation_matrimonial", "email", "adresse", "mot_de_passe")
VALUES ('Dupont', 'Alice', '1990-05-15', 'F', 123456789, 'Sophie Dupont', 'Pierre Dupont', 'Célibataire', 'alice.dupont@example.com', '123 Rue de la Liberté', 'motdepasse123'),
       ('Martin', 'Jean', '1985-10-20', 'M', 987654321, 'Marie Martin', 'Jacques Martin', 'Marié', 'jean.martin@example.com', '456 Avenue des Roses', 'password123'),
       ('Dubois', 'Sophie', '1992-03-08', 'F', 234567890, 'Isabelle Dubois', 'Philippe Dubois', 'Célibataire', 'sophie.dubois@example.com', '789 Boulevard de la Paix', 'securepass123');

INSERT INTO "candidat_embauche" ("id_candidat")
VALUES (1),
       (2),
       (3);

INSERT INTO "categorie" ("nom")
VALUES ('Catégorie A'),
       ('Catégorie B'),
       ('Catégorie C');

INSERT INTO "cnaps" ("id_candidat_embauche")
VALUES (1),
       (2),
       (3);

INSERT INTO "conge_personnel" ("id_personnel", "jours_conge", "jours_specifique", "date")
VALUES (1, 20, 5.5, '2023-07-15'),
       (2, 18, 4, '2023-08-10'),
       (3, 22, 6, '2023-09-05');

INSERT INTO "contrat_essaie" ("id_candidat_embauche", "date_debut", "date_fin", "id_salaire", "montant_salaire", "id_profil", "id_avantage", "date_essaie", "etat")
VALUES (1, '2023-05-01', '2023-06-01', 1, 2500.00, 1, 1, '2023-06-02', 1),
       (2, '2023-06-15', '2023-07-15', 2, 2800.00, 2, 2, '2023-07-16', 21),
       (3, '2023-07-01', '2023-08-01', 3, 3000.00, 3, 3, '2023-08-02', 1);


INSERT INTO "contrat_vraie" ("date", "id_essaie")
VALUES ('2023-06-05', 1),
       ('2023-07-20', 2),
       ('2023-08-10', 3);

INSERT INTO "demande_conge" ("id_personnel", "date_demande", "date_debut", "date_fin", "etat")
VALUES (1, '2023-07-01', '2023-08-01', '2023-08-15', 1),
       (2, '2023-08-10', '2023-09-01', '2023-09-10', 1),
       (3, '2023-09-05', '2023-10-01', '2023-10-05', 1);

INSERT INTO "embauche_organisme" ("id_embauche", "id_organisme_sanitaire")
VALUES (1, 1),
       (2, 2),
       (3, 3);

INSERT INTO "motif_absence" ("motif")
VALUES ('Maladie'),
       ('Congé payé'),
       ('Maternité');


INSERT INTO "option_reponse" ("id_question", "option_reponse")
VALUES (4, 'je sais parler français'),
       (4, 'je sais nager'),
       (5, 'je fais du sport'),
       (5, 'jaime la musique');

INSERT INTO "organisme_sanitaire" ("nom")
VALUES ('Centre médical A'),
       ('Clinique B'),
       ('Hôpital C');

INSERT INTO "personnels" ("id_embauche")
VALUES (1),
       (2),
       (3);

INSERT INTO "profil" ("id_service", "id_categorie", "description")
VALUES (1, 1, 'Développeur Web'),
       (2, 2, 'Responsable Marketing'),
       (3, 3, 'Gestionnaire RH');

INSERT INTO "profilage" ("id_profil", "nombre")
VALUES (1, 10),
       (2, 15),
       (3, 20);

INSERT INTO "questionnaire" ("id_profil", "question", "point")
VALUES (4, 'Quelles sont vos compétences en programmation?', 5.0),
       (4, 'Avez-vous de expérience dans la gestion de projet?', 3.5),
       (5, 'Parlez-nous de vos compétences linguistiques.', 4.0);

INSERT INTO "reponse_vraie" ("id_question", "reponse")
VALUES (4, 'Je suis expérimenté en Java et Python.'),
       (5, 'Oui, jai géré plusieurs projets avec succès.'),
       (6, 'Je parle couramment anglais et français.');

INSERT INTO "salaire" ("type")
VALUES ('Salaire mensuel'),
       ('Salaire horaire'),
       ('Salaire annuel');

INSERT INTO "service" ("nom", "adresse")
VALUES ('Service informatique', '123 Rue de lInformatique'),
       ('Service marketing', '456 Avenue du Marketing'),
       ('Service RH', '789 Boulevard des Ressources Humaines');

INSERT INTO "subordonne" ("id_personnel", "id_subordonne")
VALUES (1, 2),
       (1, 3),
       (2, 3);



       import React, { useState, useEffect } from "react";
import axios from "axios"; // Si vous utilisez Axios pour effectuer des requêtes HTTP

const QuestionnaireComponent = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Faites votre requête API pour obtenir les questions et les options de réponses
    axios.get("votre_api/questionnaire").then((response) => {
      setQuestions(response.data);
    });
  }, []); // Le deuxième argument vide signifie que cela ne sera exécuté qu'une fois après le premier rendu

  return (
    <div>
      <h1>Questionnaire</h1>
      {questions.map((question) => (
        <div key={question.id}>
          <h2>{question.question}</h2>
          <ul>
            {question.options.map((option) => (
              <li key={option.id}>
                <input type="radio" name={`question_${question.id}`} value={option.id} />
                {option.option_reponse}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default QuestionnaireComponent;
