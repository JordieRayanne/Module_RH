import '../params/VolumeHommeJour.css';
import Input from './Input';

const VolumeHommeJour = ({label}) => {

  return (
    <div className='input-container'>
      <label id='label'>{label}</label><br/>
      <Input
          label="Volume d'usage en Homme-Jour"
          type="number"
          wdth='50%'
      /><br/><br/>
    </div>
  );
};

export default VolumeHommeJour;
