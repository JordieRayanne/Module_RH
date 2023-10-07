import '../params/VolumeHoraire.css';
import Input from './Input';

const VolumeHoraire = ({label}) => {

  return (
    <div className='input-container'>
      <label id='label'>{label}</label><br/>
      <Input
          name="numberOfHours"
          label="Nombre d'heures"
          type="number"
      /><br/><br/>
      <Input
          name="capaciteUniteHoraire"
          label="Capacite par unite"
          type="number"
      /><br/><br/>
    </div>
  );
};

export default VolumeHoraire;
