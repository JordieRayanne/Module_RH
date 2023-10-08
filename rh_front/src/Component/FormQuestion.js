import { useEffect, useState } from 'react';
import '../params/FormQuestion.css';

function FormQuestion(){

    const [options,setOptions] =  useState([]);

    const [questionnaire, setQuestionnaire] = useState(null); // État pour stocker les données du questionnaire


    const [ formValues, setFormValues]=useState({
        idprofil:'',
        question:'',
        point:'',
        reponses: [''],
        reponsesOptions:[''],
    });

    const [errors, setErrors] = useState({});
// ------------Get profil dans le back-------------------
    useEffect(() => {
        fetch('http://localhost:8080/rh_back/ProfilController')
            .then(response => response.json())
            .then(data => setOptions(data))
            .catch(error => console.error('erreur lors de la recuperation des données : ',error));

    }, []);
// --------------------end------------------------

// --------------------Boutton PLUS------------------
    const handleAjouterReponse = () => {
        setNumReponses(numReponses + 1);
    };
// --------------------------end -----------------------

// ------------------------INPUT question--------------------
    const handleInputQuestion = event => {
        console.log("selected : ", event.target.value);
        const value= event.target.value;
        setFormValues({...formValues,question:value});
        setErrors(prevErrors =>({
            ...prevErrors,
            question: value ? "" : "Ce champ est obligatoire"
        }));
    }; 
// -----------------------end----------------------------

// -------------------------INPUT point--------------------
const handleInputPoint = event => {
    console.log("selected : ", event.target.value);
    const value= event.target.value;
    setFormValues({...formValues,point:value});
    setErrors(prevErrors =>({
        ...prevErrors,
        point: value ? "" : "Ce champ est obligatoire"
    }));
}; 
// ---------------------------end------------------------------------

// ----------INPUT select profil------------------
    const handleSelectChange = event => {
        console.log("Selected Option ID:", event.target.value);
        setFormValues(prevState => ({
          ...prevState,
          idprofil: event.target.value,
        }));
      };
// -------------------------end-----------------------

//------------------BOUTON valider question-----------------------
    const handleSubmitQuestion = () => {
       const gsonData = {
            idprofil:formValues.idprofil,
            question:formValues.question,
            point:formValues.point,
       } ;

    console.log(JSON.stringify(gsonData));
    
    fetch('http://localhost:8080/rh_back/QuestionnaireController', {
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(gsonData),
        mode:'cors',

      })
      .then(response => response.json())
      .then(data => {
        console.log('Reponse de l\'API:',data);
        setQuestionnaire(data);
      })
      .catch(error => {
        console.error('Erreur lors de la requête API :', error);
      });

       setShowOptionForm(true);
    }
//-------------------------end---------------------------------

// ------------------INPUT OPTIONS REPONSE---------------------
const handleInputOptionReponse = (e, index) => {
    const nouvellesReponses = [...formValues.reponsesOptions];
    nouvellesReponses[index] = e.target.value;
    setFormValues({ ...formValues, reponsesOptions: nouvellesReponses });
};
// ------------------------end-------------------------------------

//---------------------BOUTON valider options reponses --------------------
    const handleSubmitOptionReponse = () => {
        const gsonData = formValues.reponsesOptions.map(reponse => {
            return{
                question:questionnaire.id,
                reponse:reponse
            };
     });
        console.log(JSON.stringify(gsonData));

        
        fetch('http://localhost:8080/rh_back/OptionReponseController', {
            method:'POST',
            headers: {
                'content-type':'application/json',
            },
            body:JSON.stringify(gsonData),
            mode:'cors',
        })
        .then(response => response.json())
        .then(data => {
            console.log('Reponse de l\'API:',data);
        })
        .catch(error => {
            console.error('Erreur lors de la requête API :', error)
        })
    }
// -----------------------------end ---------------------------------------

//------------------------CORRECT ANSWER--------------------------------------
     const [numReponses, setNumReponses] = useState(1); // Définissez le nombre initial d'inputs à afficher à 1

     const [showOptionsForm,setShowOptionForm]=useState(false);

     const handleInputReponse = (e, index) => {
        const nouvellesReponses = [...formValues.reponses];
        nouvellesReponses[index] = e.target.value;
        setFormValues({ ...formValues, reponses: nouvellesReponses });
    };

     const OptionReponseCorrectAnswer = () => {
        const gsonData = formValues.reponses.map(reponse => {
            return {
                question: questionnaire.id,
                reponse: reponse
            };
        });
        console.log(JSON.stringify(gsonData));

        fetch('http://localhost:8080/rh_back/ReponseVraiesController', {
            method:'POST',
            headers: {
                'content-type':'application/json',
            },
            body:JSON.stringify(gsonData),
            mode:'cors',
        })
        .then(response => response.json())
        .then(data => {
            console.log('Reponse de l\'API:',data);
        })
        .catch(error => {
            console.error('Erreur lors de la requête API :', error)
        })
     }
//---------------------------end-------------------------------

//-------------------------FORMULAIRE----------------------------
    return(
        <div id="FormQuestionContent">
            
{/*--------------------------Insertion question------------------------------------*/}
            <div className='FormQuestion'>
                <label>Choisissez un profil : </label>
                <select value={formValues.selectedProfil} onChange={handleSelectChange}>
                    {options.map(option => (
                        <option key={option.id} value={parseInt(option.id)}>{option.nom}</option>
                    ))}
                </select>

                <label>Question : </label>
                <input
                    type="text"
                    value={formValues.question}
                    onChange={handleInputQuestion}
                    placeholder="question"   
                />
                {errors.question && <span className="error">{errors.question}</span>}

                <label>Point : </label>
                <input
                    type="number"
                    value={formValues.point}
                    onChange={handleInputPoint}
                    placeholder="point"   
                />

                <button onClick={handleSubmitQuestion}>Valider</button>

            </div>
{/*--------------------------------End---------------------------------------------*/}

{/*---------------------------Insertion vraie reponse----------------*/}
            {showOptionsForm && (
                <div id='Answer'>
                    <div className='CorrectAnswer'> 
                        {questionnaire && (
                            <div>
                                <p>Question: {questionnaire.question}</p>
                                <h2>ID: {questionnaire.id}</h2>
                                <label>Réponse : </label>
                                {Array.from({ length: numReponses }, (_, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        value={formValues.reponses[index] || ''}
                                        onChange={(e) => handleInputReponse(e, index)}
                                        placeholder={`Réponse ${index + 1}`}
                                        required   
                                    />
                                ))}
                                <button onClick={handleAjouterReponse}>plus</button>
                                <button onClick={OptionReponseCorrectAnswer}>Valider</button>
                            </div>
                        )}
                    </div>
{/*------------------------------End------------------------------*/}

{/*----------Insertion option reponse-----------------------------*/}
                <div className='showOptionsForm'>

                    <h2>Options de reponse</h2>
                    {questionnaire && (
                            <div>
                                <p>Question: {questionnaire.question}</p>
                                <input
                                    type='hidden'
                                    value={questionnaire.id}
                                />
                                <label>Réponse : </label>
                                {Array.from({ length: numReponses }, (_, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        value={formValues.reponsesOptions[index] || ''}
                                        onChange={(e) => handleInputOptionReponse(e, index)}
                                        placeholder={`Réponse ${index + 1}`}
                                        required   
                                    />
                                ))}
                                <button onClick={handleAjouterReponse}>plus</button>
                                <button onClick={handleSubmitOptionReponse}>Valider</button>
                            </div>
                        )}                
                </div>
{/*--------------------------End----------------------*/}

                </div>
            )};

        </div>
    );
// ---------------------end-----------------------
    
}

export default FormQuestion;