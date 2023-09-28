import '../params/VolumeTache.css';
import Input from './Input';

const VolumeTache = ({label}) => {

  return (
    <div className='input-container'>
      <label id='label'>{label}</label><br/>
      <Input
          label="Nombre de tache"
          type="number"
      /><br/><br/>
      <Input
          label="Capacite par unite"
          type="number"
      /><br/><br/>
    </div>
  );
};

export default VolumeTache;
