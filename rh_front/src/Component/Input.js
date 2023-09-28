import React, { useState } from 'react';
import '../params/Input.css';

const Input = ({ label, type, value = '' ,wdth=''}) => {
  const [clicked, setClicked] = useState(false);
  const [inputValue, setInputValue] = useState(''); // Correctly defined state variable

  const handleInputClick = () => {
    setClicked(true);
  };

  const handleInputChange = (event) => {
    // Use setInputValue to update the state
    setInputValue(event.target.value);
  };

  return (
    <div className={`input-container${clicked ? ' clicked' : ''}`}>
      <label id='label'>{label}</label>
      <input
        type={type}
        value={inputValue} // Use inputValue here
        onClick={handleInputClick}
        onChange={handleInputChange}
        onBlur={() => setClicked(true)}
        style={{width: wdth}}
      />
    </div>
  );
};

export default Input;
