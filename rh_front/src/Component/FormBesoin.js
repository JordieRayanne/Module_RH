import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../params/FormBesoin.css';
import Selector from './Selector';
import VolumeHommeJour from './VolumeHommeJour';
import VolumeHoraire from './VolumeHoraire';
import VolumeTache from './VolumeTache';
import axios from 'axios';

const FormBesoin = ({ title, value }) => {

  // request getAllService : all services will be stocked in services variable.
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/rh_back/ServiceController') // Replace with the actual endpoint
      .then((response) => {
        const servicesData = response.data;
        setServices(servicesData);
      })
      .catch((error) => {
        console.error('Error fetching services:', error);
      });
  }, [

    
  ]);


  const [formData, setFormData] = useState({
    selectedOptionVolume: '',
    selectedOptionService: '',
  });

  const [showVolumeTache, setShowVolumeTache] = useState(false);
  const [showVolumeHoraire, setShowVolumeHoraire] = useState(false);
  const [showVolumeHommeJour, setShowVolumeHommeJour] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });

    // Update the state variables to control component visibility
    if (value === '1') {
      setShowVolumeTache(true);
      setShowVolumeHoraire(false);
      setShowVolumeHommeJour(false);
    } else if (value === '2') {
      setShowVolumeTache(false);
      setShowVolumeHoraire(true);
      setShowVolumeHommeJour(false);
    } else if(value === '3'){
      setShowVolumeHoraire(false);
      setShowVolumeTache(false);
      setShowVolumeHommeJour(true);
    } else {
      setShowVolumeTache(false);
      setShowVolumeHoraire(false);
    }
  };

    // Define a variable for the placeholder text
    let placeholderText = 'Select an option';

    // Update the placeholder text based on the selected option
    if (formData.selectedOptionVolume === '1') {
      placeholderText = 'Taches';
    } else if (formData.selectedOptionVolume === '2') {
      placeholderText = 'Heures';
    } else if (formData.selectedOptionVolume === '3') {
      placeholderText = 'Homme Jour';
    }



    // SERVICE =================================================================================================================
    // Define a variable for the placeholder text
    const [placeholderService, setPlaceholderService] = useState('Select a service or department');
    const servicesOptions = services.map((service) => ({
      label: service.nom, //  "label" is the name that will display
      value: service.id,
    }));
    const optionToNameMap = {};
    servicesOptions.forEach((service) => {
      optionToNameMap[service.value] = service.label;
    });
    const handleServiceInputChange = (name,value) => {
      setFormData({
        ...formData,
        [name]: value,
      });
    
      // Set the placeholder based on the selected option's name
      const placeholder = optionToNameMap[value] || 'Select a service or department';
      setPlaceholderService(placeholder);
    }

    // END SERVICE =================================================================================================================

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      // Create an object containing the form data
      const formDataObject = {
        selectedOptionService: formData.selectedOptionService,
        selectedOptionVolume: formData.selectedOptionVolume,
        nom:"rakoto",
        prenom:"Bozy",
        // Add other form fields here as needed
      };
    
      try {
        // Send a POST request to your Java Servlet endpoint
        const response = await axios.post(
          'http://localhost:8080/rh_back/SubmitBesoinController',
          formDataObject
        );
    
        // Handle the response from the server here
        console.log('Server Response:', response.data);
    
        // Redirect to another page if needed
        // history.push('/ProfilageView');
      } catch (error) {
        // Handle errors here
        console.error('Error:', error);
      }
      navigate("/ProfilageView");
    };

  return (
    <div className="form-container">
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <Selector
            options={servicesOptions}
            placeholder={placeholderService} // Use the dynamic placeholder text
            label="Service ou departement:"
            value={formData.selectedOptionService}
            onChange={(value) => handleServiceInputChange('selectedOptionService', value)}
            marginleft="5%"
          />
        </div>
        <div>
          <Selector
            options={[
              { label: 'Volume taches', value: '1' },
              { label: 'Volume horaires', value: '2' },
              { label: 'Volume HommeJour', value: '3' },
            ]}
            placeholder={placeholderText} // Use the dynamic placeholder text
            label="Unite de volume de travail"
            value={formData.selectedOptionVolume}
            onChange={(value) => handleInputChange('selectedOptionVolume', value)}
            marginleft="5%"
          />
        </div>

        {showVolumeTache && <VolumeTache />}
        {showVolumeHoraire && <VolumeHoraire />}
        {showVolumeHommeJour && <VolumeHommeJour />}

        <button type="submit" style={{ marginLeft: '5%' }}>
          Créer
        </button>
        <button type="reset">Initialiser</button>
      </form>
    </div>
  );
};

export default FormBesoin;
