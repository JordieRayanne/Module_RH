// Selector.js
import React, { useState } from 'react';
import '../params/Selector.css';

const Selector = ({ options, label,placeholder, value, onChange, marginleft }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSelector = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={`selector${isOpen ? ' open' : ''}`} style={{marginLeft: marginleft}}>
        <p>{label}</p>
      <div className="selector-flex">
        <div className="selector-label" onClick={toggleSelector}>
          {placeholder}
        </div>
      </div>

      <ul className="selector-options">
        {options.map((option) => (
          <li
            key={option.value}
            onClick={() => handleOptionClick(option.value)}
          >
            {option.label}
          </li>
        ))}
      </ul>
      <input type="hidden" value={value} />
      
    </div>
  );
};

export default Selector;
