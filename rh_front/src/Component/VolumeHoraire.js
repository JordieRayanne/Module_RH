import '../params/VolumeHoraire.css';
import Input from './Input';

const VolumeHoraire = ({label}) => {

  return (
    <div className='input-container'>
      <label id='label'>{label}</label><br/>
      <Input
          label="Nombre d'heures"
          type="number"
      /><br/><br/>
      <Input
          label="Capacite par unite"
          type="number"
      /><br/><br/>
    </div>
  );
};

export default VolumeHoraire;
