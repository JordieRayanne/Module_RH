import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../params/FromBG.css';

export default function FormBG(){

//    ========================================== GETTING ALL SERVICES DATA =========================================
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/rh_back/ServiceController') 
        .then((response) => {
            const servicesData = response.data;
            setServices(servicesData);
        })
        .catch((error) => {
            console.error('Error fetching services:', error);
        });
    }, []);

    //    ========================================== GETTING ALL VOLUMES DATA ======================================
    const [volumes, setVolumes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/rh_back/VolumeController') 
        .then((response) => {
            const volumesData = response.data;
            setVolumes(volumesData);
        })
        .catch((error) => {
            console.error('Error fetching services:', error);
        });
    }, []);

    // ======================================== HANDLER ============================================================
    const [isInputVisible, setIsInputVisible] = useState(false);
    
    const [formData, setFormData] = useState({
        selectedOptionVolume: '',
        selectedOptionService: '',
        numberOfTaches: 0, 
        capaciteUnitaireTaches: 1,
        numberOfHours: 0,
        capaciteUnitaireHoraires: 1,
        volumeHommeJour: 0,
    });

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };
    const handleVolumeChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
        setIsInputVisible(true);
    };


    // ===================================== ABOUT THE SUBMIT OF FORM ==============================================

    const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();

      const formDataObject = new FormData();
      formDataObject.append('selectedOptionService', formData.selectedOptionService);
      formDataObject.append('selectedOptionVolume', formData.selectedOptionVolume);

      // Conditionally add input values based on the selected option
      if (String(formData.selectedOptionVolume) === "3") {
            // Volume Tache inputs
            formDataObject.append('numberOfTaches', formData.numberOfTaches);
            formDataObject.append('capaciteUnitaireTaches', formData.capaciteUnitaireTaches);
      } else if (String(formData.selectedOptionVolume) === "2") {
            // Volume HommeJour inputs
            console.log(formData.selectedOptionVolume);
            formDataObject.append('volumeHommeJour', formData.volumeHommeJour);
            console.log(formData.volumeHommeJour);
      } else if (String(formData.selectedOptionVolume) === "1") {
            // Volume Horaire inputs
            formDataObject.append('numberOfHours', formData.numberOfHours);
            formDataObject.append('capaciteUnitaireHoraires', formData.capaciteUnitaireHoraires);
      } 

      axios.post('http://localhost:8081/rh_back/SubmitBesoinController', formDataObject, {
        'Content-Type': 'multipart/form-data',
      }).then((response) => {
        const service_employee = response.data;
        localStorage.setItem('service_employee', JSON.stringify(service_employee));
        navigate('/profilageView');
      }).catch((error) => {
        alert('Error:', error);
      });
    }
    return(
    <div class="container d-lg-flex">
            
        <div class="box-2">
            <div class="box-inner-2">
                <div>
                    <p class="fw-bold" style={{fontSize: 21 + "pt"}}>Fomulaire d'entrée de besoin.</p>
                    <p class="dis mb-3"></p>
                </div>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div class="mb-3">
                        <p class="">Choix de Service:</p>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            name="selectedOptionService"
                            value={formData.selectedOptionService}
                            onChange={handleFormChange}
                        >
                            <option selected hidden>Choose...</option>
                            {services.map((service) => (
                                <option key={service.id} value={service.id}>
                                {service.nom}
                                </option>
                            ))}
                        </select>
                    </div>
                        <div class="mb-3">
                            <p class="">Choix d' unité de volume:</p>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                name="selectedOptionVolume"
                                value={formData.selectedOptionVolume}
                                onChange={handleVolumeChange}
                            >
                                <option selected hidden>Choose...</option>
                                {volumes.map((volume) => (
                                    <option key={volume.id} value={volume.id}>
                                    {volume.nom}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={`fade-in ${isInputVisible ? 'active' : ''}`}>
                        {formData.selectedOptionVolume === '1' && (
                            <div>
                            <p>Volume d'heures:</p>
                            <input
                                className="form-control"
                                type="number"
                                name="numberOfHours"
                                placeholder="(heure)"
                                value={formData.numberOfHours} 
                                onChange={(e) => setFormData({ ...formData, numberOfHours: e.target.value })} 
                            />
                            <p>Capacité Unitaire:</p>
                            <input
                                className="form-control"
                                type="number"
                                name="capaciteUnitaireHoraires"
                                placeholder="(heure)"
                                value={formData.capaciteUnitaireHoraires} 
                                onChange={(e) => setFormData({ ...formData, capaciteUnitaireHoraires: e.target.value })} 
                            />
                            </div>
                        )}

                        {formData.selectedOptionVolume === '2' && (
                            <div>
                            <p>Volume en Homme-Jour:</p>
                            <input
                                className="form-control"
                                type="number"
                                name="volumeHommeJour"
                                placeholder="(entier)"
                                value={formData.volumeHommeJour} 
                                onChange={(e) => setFormData({ ...formData, volumeHommeJour: e.target.value })} 
                            />
                            </div>
                        )}

                        {formData.selectedOptionVolume === '3' && (
                            <div>
                            <p>Volume de tâches:</p>
                            <input
                                className="form-control"
                                type="number"
                                name="numberOfTaches"
                                placeholder="(entier)"
                                value={formData.numberOfTaches}
                                onChange={(e) => setFormData({ ...formData, numberOfTaches: e.target.value })} 
                            />
                            <p>Capacité Unitaire:</p>
                            <input
                                className="form-control"
                                type="number"
                                name="capaciteUnitaireTaches"
                                placeholder="(entier)"
                                value={formData.capaciteUnitaireTaches}
                                onChange={(e) => setFormData({ ...formData, capaciteUnitaireTaches: e.target.value })}
                            />
                            </div>
                        )}
                        </div>

                        <button type="submit" style={{width: 100 + "%",marginTop: 3 + "%",borderRadius: 10 + "px"}}>Valider</button>
                </form>
            </div>
        </div>
    </div>
    );
}