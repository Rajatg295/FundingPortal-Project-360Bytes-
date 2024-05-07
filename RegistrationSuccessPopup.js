import React from 'react';
import './RegistrationSuccessPopup.css'; 

const RegistrationSuccessPopup = ({ aadharNumber, onClose }) => {
  return (
    <div className="registration-success-popup">
      <h2>Registration Successful!</h2>
      <p>Your UID is: {aadharNumber}</p>
      <button onClick={onClose}>Continue to Login</button>
    </div>
  );
};

export default RegistrationSuccessPopup;