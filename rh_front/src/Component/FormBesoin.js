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
    axios.get('http://localhost:8081/rh_back/ServiceController') // Replace with the actual endpoint
      .then((response) => {
        const servicesData = response.data;
        setServices(servicesData);
      })
      .catch((error) => {
        console.error('Error fetching services:', error);
      });
  }, []);


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



    // SERVICE ====================================================================================================================
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
    const handleSubmit = (event) => {
      event.preventDefault();

      const formDataObject = new FormData();
      formDataObject.append('selectedOptionService', formData.selectedOptionService);
      formDataObject.append('selectedOptionVolume', formData.selectedOptionVolume);

      // Conditionally add input values based on the selected option
      if (String(formData.selectedOptionVolume) === '1') {
        // Volume Tache inputs
        formDataObject.append('numberOfTaches', formData.numberOfTaches);
        formDataObject.append('capaciteUniteTache', formData.capaciteUniteTache);
      } else if (String(formData.selectedOptionVolume) === '2') {
        // Volume Horaire inputs
        formDataObject.append('numberOfHours', formData.numberOfHours);
        formDataObject.append('capaciteUniteHoraire', formData.capaciteUniteHoraire);
      } else if (String(formData.selectedOptionVolume) === "3") {
        // Volume HommeJour inputs
        console.log(formData.selectedOptionVolume);
        formDataObject.append('volumeUsageHommeJour', formData.volumeUsageHommeJour);
        console.log(formData.volumeUsageHommeJour);
      }
      axios.post('http://localhost:8081/rh_back/SubmitBesoinController',formDataObject,{'Content-Type': 'multipart/form-data'})
      .then((response) => {
          const service_employee = (response).data
          console.log(service_employee);
          alert(service_employee);
      })
      .catch((error) => {
        // alert(error);
      });
    }
    

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
        {showVolumeHommeJour && <VolumeHommeJour value={formData.volumeUsageHommeJour} />}

        <button type="submit" style={{ marginLeft: '5%' }}>
          Créer
        </button>
        <button type="reset">Initialiser</button>
      </form>
    </div>
  );
}

export default FormBesoin;
