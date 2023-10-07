import '../params/VolumeHommeJour.css';
import Input from './Input';

const VolumeHommeJour = ({label,value}) => {

  return (
    <div className='input-container'>
      <label id='label'>{label}</label><br/>
      <Input
          name="volumeUsageHommeJour"
          label="Volume d'usage en Homme-Jour"
          type="number"
          wdth='50%'
          value={value}
      /><br/><br/>
    </div>
  );
};

export default VolumeHommeJour;
