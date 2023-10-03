import '../params/FormProfilNumber.css';

const { useState , useEffect } = require("react");

function FormProfilNumber(){

    const[options,setOptions]=useState([]);

    const [formValues, setFormValues] = useState({
      selectedOption: '', // Stocke la valeur sélectionnée dans le menu déroulant
      numberOfProfiles: '', // Stocke le nombre de profils saisi
    });

    //getProfil in back 
    useEffect(() => {
        fetch('http://localhost:8080/rh_back/ProfilController')
          .then(response => response.json())
          .then(data => setOptions(data))
          .catch(error => console.error('Erreur lors de la récupération des données : ', error));
      }, []);
    // --end

      const handleSelectChange = event => {
        console.log("Selected Option ID:", event.target.value);
        setFormValues(prevState => ({
          ...prevState,
          selectedOption: event.target.value,
        }));
      };      
      
      const handleNumberInputChange = event => {
        setFormValues(prevState => ({
          ...prevState,
          numberOfProfiles: event.target.value,
        }));
      };

      const handleFormSubmit = () => {
        const gsonData = {
          optionId: formValues.selectedOption,
          numberOfProfiles: formValues.numberOfProfiles,
        };

        fetch('http://localhost:8080/rh_back/ProfilageController', {
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
        })
        .catch(error => {
          console.error('Erreur lors de la requête API :', error);
        });
      
        // console.log(JSON.stringify(gsonData)); // Affiche les données au format JSON dans la console
      };      
      

      return (
        <div id="FormProfilNumber">

          <label>Choisissez un profil :</label>
            <select value={formValues.selectedOption} onChange={handleSelectChange}>
                {options.map(option => (
                  <option key={option.id} value={parseInt(option.id, 10)}>
                    {option.nom}
                  </option>
                ))}
              </select>

              <label>Nombre: </label>
              <input
                type="number"
                value={formValues.numberOfProfiles}
                onChange={handleNumberInputChange}
                width='50%'
              />

              <button onClick={handleFormSubmit}>Valider</button>

        </div>
      );    
}

export default FormProfilNumber;
