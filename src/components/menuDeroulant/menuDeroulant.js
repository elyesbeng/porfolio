import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./menuDeroulant.scss";

function DropdownDescription({ title, description }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>
        {title}
      </button>
      <div className={isDropdownOpen ? 'collapseExpandOn' : 'collapseExpandOff'}>
          {Array.isArray(description) ? (
              <ul>
                {description.map((e, index) => (
                <li key={index}>{e}</li>
                ))}
              </ul>
          ) : (
              <p>{description}</p>
              )}
      </div>
    </div>
  );
}



export default DropdownDescription;