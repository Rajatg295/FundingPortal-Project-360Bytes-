import React, { useState } from 'react';
import './NewRegistration.css';
import backgroundImage from './img3.jpg';
import logo from './logo.png';  

const logoStyle = {
  position: 'absolute',
  top: '20px', 
  left: '20px', 
  width: '100px', 
  height: 'auto', 
};

const App = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: '100vh', 
  };

  return (
    <div style={backgroundStyle}>
      <header>  
        <div style={{color:'white'}}>
          <img src={logo} alt="Logo" style={logoStyle} />
          <h1 style={{ margin:'0'}}>NATIONAL SCHOLARSHIP PORTAL</h1>
          <p>Government of India</p>
        </div>
      </header>
      <Registration />
    </div>
  );
};

const RegistrationSuccessPopup = ({ aadharNumber, onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <h3>Registration Successful!</h3>
        <p>Your UID (Aadhar Number) is: {aadharNumber}</p>
        <button onClick={onClose}>Continue to Login</button>
      </div>
    </div>
  );
};

const Registration = () => {
  const [formData, setFormData] = useState({
    stateOfDomicile: '',
    district: '',
    name: '',
    gender: '',
    dob: '',
    mobileNumber: '',
    email: '',
    institutionCode: '',
    aadharNumber: '',
    bankIFSCCode: '',
    bankAccountNumber: '',
    bankName: '',
    password: '',
    confirmPassword: ''
  });
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Form submitted successfully:', formData);
      setFormData({
        stateOfDomicile: '',
        district: '',
        name: '',
        gender: '',
        dob: '',
        mobileNumber: '',
        email: '',
        institutionCode: '',
        aadharNumber: '',
        bankIFSCCode: '',
        bankAccountNumber: '',
        bankName: '',
        password: '',
        confirmPassword: ''
      });
      setIsRegistered(true);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };
  
  const handleReset = () => {
    setFormData({
      stateOfDomicile: '',
      district: '',
      name: '',
      gender: '',
      dob: '',
      mobileNumber: '',
      email: '',
      institutionCode: '',
      aadharNumber: '',
      bankIFSCCode: '',
      bankAccountNumber: '',
      bankName: '',
      password: '',
      confirmPassword: ''
    });
  };
const handleClosePopup = () => {
    setIsRegistered(false);
  };

  return (
    <div className="registration-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="stateOfDomicile">State of Domicile:</label>
          <input type="text" name="stateOfDomicile" value={formData.stateOfDomicile} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="district">District:</label>
          <input type="text" name="district" value={formData.district} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input type="datetime-local" name="dob" value={formData.dob} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="institutionCode">Institution Code:</label>
          <input type="text" name="institutionCode" value={formData.institutionCode} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="aadharNumber">Aadhar Number:</label>
          <input type="text" name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="bankIFSCCode">Bank IFSC Code:</label>
          <input type="text" name="bankIFSCCode" value={formData.bankIFSCCode} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="bankAccountNumber">Bank Account Number:</label>
          <input type="text" name="bankAccountNumber" value={formData.bankAccountNumber} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="bankName">Bank Name:</label>
          <input type="text" name="bankName" value={formData.bankName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        </div>
        <button type="submit">Register</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
      {isRegistered && <RegistrationSuccessPopup aadharNumber={formData.aadharNumber} onClose={handleClosePopup} />}

    </div>
      );
};

export default App;
