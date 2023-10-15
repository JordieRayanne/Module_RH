import React, { useState, useEffect } from "react";
import '../params/QuestionReponse.css';

function QuestionReponse() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/rh_back/QuestionReponseController')
            .then(response => response.json())
            .then(data => setQuestions(data))
            .catch(error => console.error('Erreur lors de la récupération des données : ', error));
    }, []);

    const calculerNote = () => {
        let score = 0;
        questions.forEach(question => {
            const selectedOptions = document.querySelectorAll(`input[name=question_${question.id}]:checked`);
            const selectedOptionValues = Array.from(selectedOptions).map(option => option.value);
            if (selectedOptionValues.sort().join(',') === question.options.sort().join(',')) {
                score += question.point;
            }
        });
        alert(`Votre score est de ${score} points.`);
    };

    return (
        <div className="contentform">
            <h1>Questionnaire</h1>
            {questions.map(question => (
                <div key={question.id}>
                    <h3>{question.question}</h3>
                    <ul>
                        {question.options.map((option, index) => (
                            <li key={index}>
                                <input
                                    type={question.typeReponse === 'Vraie' ? 'checkbox' : 'radio'}
                                    name={`question_${question.id}`}
                                    value={option}
                                />
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <button onClick={calculerNote}>Valider</button>
        </div>
    );
}

export default QuestionReponse;
