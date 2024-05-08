import React, { useState } from 'react';
import './Applyhere.css'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import backgroundImage from './img3.jpg';
import logo from './logo.png';  

const logoStyle = {
  position: 'absolute',
  top: '20px', 
  left: '20px',             
  width: '100px', 
  height: 'auto', 
};

const Applyhere = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: '100vh', 
  };
  const [formData, setFormData] = useState({
    aadharNumber: '',
    category: '',
    fatherName: '',
    motherName: '',
    familyAnnualIncome: '',
    instituteName: '',
    presentCourseYear: '',
    presentClassCourse: '',
    modeOfStudy: '',
    classStartDate: '',
    universityBoardName: '',
    previousClassCourse: '',
    passingYear: '',
    previousClassPercentage: '',
    admissionFee: '',
    tuitionFee: '',
    otherFee: '',
    isDisabled: '',
    typeOfDisability: '',
    percentageOfDisability: '',
    maritalStatus: '',
    parentsProfession: '',
    state: '',
    district: '',
    block: '',
    houseNumber: '',
    streetNumber: '',
    pincode: '',
    schemeApplyFor: '',
    domicileCertificate: '',
    studentPhotograph: '',
    instituteIdCard: '',
    casteCertificate: '',
    previousYearMarksheet: '',
    currentYearFeeReceipt: '',
    bankPassbook: '',
    aadharCard: '',
    tenthMarksheet: '',
    twelfthMarksheet: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const updatedValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;
    setFormData({
      ...formData,
      [name]: updatedValue
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
 
  const handleReset = () => {
    setFormData({
      aadharNumber: '',
      category: '',
      fatherName: '',
      motherName: '',
      familyAnnualIncome: '',
      instituteName: '',
      presentCourseYear: '',
      presentClassCourse: '',
      modeOfStudy: '',
      classStartDate: '',
      universityBoardName: '',
      previousClassCourse: '',
      passingYear: '',
      previousClassPercentage: '',
      admissionFee: '',
      tuitionFee: '',
      otherFee: '',
      isDisabled: '',
      typeOfDisability: '',
      percentageOfDisability: '',
      maritalStatus: '',
      parentsProfession: '',
      state: '',
      district: '',
      block: '',
      houseNumber: '',
      streetNumber: '',
      pincode: '',
      schemeApplyFor: '',
      domicileCertificate: '',
      studentPhotograph: '',
      instituteIdCard: '',
      casteCertificate: '',
      previousYearMarksheet: '',
      currentYearFeeReceipt: '',
      bankPassbook: '',
      aadharCard: '',
      tenthMarksheet: '',
      twelfthMarksheet: '',
    });
  };
  const buttonStyle = {
    display: 'inline-block',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '5px',
    width: '150px',
    height: '30px',
    textDecoration: 'none',
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
      <div  style={{margin:'0'}}className='ApplyNavbar'>
        <Navbar/>
      
        <div className='form-container'>
          
    <h2>Apply Here</h2>
    <form onSubmit={handleSubmit}>
    
      <div>
        <label htmlFor="aadharNumber">Aadhar Number:</label>
        <input type="text" id="aadharNumber" name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <select id="category" name="category" value={formData.category} onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="General">General</option>
          <option value="OBC">OBC</option>
          <option value="SC">SC</option>
          <option value="ST">ST</option>
          <option value="EWS">EWS</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="motherName">motherName:</label>
        <input type="text" id="motherName" name="motherName" value={formData.motherName} onChange={handleChange} />
      </div> 
         
       

    
  
    
        
        <div>
  <label htmlFor="maritalStatus">Marital Status:</label>
  <select id="maritalStatus" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
    <option value="">Select</option>
    <option value="Single">Single</option>
    <option value="Married">Married</option>
    <option value="Divorced">Divorced</option>
    <option value="Widowed">Widowed</option>
  </select>
</div>
          <div>
          <label htmlFor="domicileCertificate">Domicile Certificate:</label>
          <input type="file" id="domicileCertificate" name="domicileCertificate" onChange={handleChange} />
        </div>

       

<div>
  <label htmlFor="twelfthMarksheet">12th Class Marksheet:</label>
  <input type="file" id="twelfthMarksheet" name="twelfthMarksheet" onChange={handleChange} />
</div>

        <div>
          <input
            type="checkbox"
            id="isAllDetailsTrue"
            name="isAllDetailsTrue"
            checked={formData.isAllDetailsTrue}
            onChange={handleChange}
          />
          <label htmlFor="isAllDetailsTrue">I confirm that all details provided above are true.</label>
        </div>

        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
      <div style={{ textAlign: 'center', marginTop:'4vh' }}>
      <Link to="/" style={buttonStyle}>Back to Homepage</Link>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Applyhere;
