import React, { useState } from 'react';
import './Applyhere.css'
import { Link } from 'react-router-dom';

const Applyhere = () => {
 
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
        <label htmlFor="Fathername">fathername:</label>
        <input type="text" id="fathername" name="fathername" value={formData.fatherName} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="motherName">motherName:</label>
        <input type="text" id="motherName" name="motherName" value={formData.motherName} onChange={handleChange} />
      </div> 
         
        <div>

          <label htmlFor="familyAnnualIncome">familyAnnualIncome:</label>
          <input type="text" id="familyAnnualIncome" name="familyAnnualIncome" value={formData.familyAnnualIncome} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="instituteName">instituteName:</label>
          <input type="text" id="instituteName" name="instituteName" value={formData.instituteName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="presentCourseYear">presentCourseYear:</label>
          <input type="text" id="presentCourseYear" name="presentCourseYear" value={formData.presentCourseYear} onChange={handleChange} />
        </div>
    
        <div>
          <label htmlFor="presentClassCourse">presentClassCourse:</label>
          <input type="text" id="presentClassCourse" name="presentClassCourse" value={formData.presentClassCourse} onChange={handleChange} />
        </div>


    
        <div>
  <label htmlFor="modeOfStudy">Mode of Study:</label>
  <select id="modeOfStudy" name="modeOfStudy" value={formData.modeOfStudy} onChange={handleChange}>
    <option value="">Select Mode of Study</option>
    <option value="Full-time">Full-time</option>
    <option value="Part-time">Part-time</option>
    <option value="Distance Learning">Distance Learning</option>
    <option value="Online">Online</option>
  </select>
</div>
        <div>
          <label htmlFor="classStartDate">classStartDate:</label>
          <input type="text" id="classStartDate" name="classStartDate" value={formData.classStartDate} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="universityBoardName">universityBoardName:</label>
          <input type="text" id="universityBoardName" name="universityBoardName" value={formData.universityBoardName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="previousClassCourse">previousClassCourse:</label>
          <input type="text" id="previousClassCourse" name="previousClassCourse" value={formData.previousClassCourse} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="passingYear">passingYear:</label>
          <input type="text" id="passingYear" name="passingYear" value={formData.passingYear} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="previousClassPercentage">previousClassPercentage:</label>
          <input type="text" id="previousClassPercentage" name="previousClassPercentage" value={formData.previousClassPercentage} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="admissionFee">admissionFee:</label>
          <input type="text" id="admissionFee" name="admissionFee" value={formData.admissionFee} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="tuitionFee">tuitionFee:</label>
          <input type="text" id="tuitionFee" name="tuitionFee" value={formData.tuitionFee} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="otherFee">otherFee:</label>
          <input type="text" id="otherFee" name="otherFee" value={formData.otherFee} onChange={handleChange} />
        </div>
        <div>
  <label htmlFor="isDisabled">Is Disabled:</label>
  <select id="isDisabled" name="isDisabled" value={formData.isDisabled} onChange={handleChange}>
    <option value="">Select</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>
        <div>
          <label htmlFor="typeOfDisability">typeOfDisability:</label>
          <input type="text" id="typeOfDisability" name="typeOfDisability" value={formData.typeOfDisability} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="percentageOfDisability">percentageOfDisability:</label>
          <input type="text" id="percentageOfDisability" name="percentageOfDisability" value={formData.percentageOfDisability} onChange={handleChange} />
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
          <label htmlFor="parentsProfession">parentsProfession:</label>
          <input type="text" id="parentsProfession" name="parentsProfession" value={formData.parentsProfession} onChange={handleChange} />
        </div>
        <div>
  <label htmlFor="state">State:</label>
  <select id="state" name="state" value={formData.state} onChange={handleChange}>
    <option value="">Select</option>
  </select>
</div>

<div>
  <label htmlFor="district">District:</label>
  <select id="district" name="district" value={formData.district} onChange={handleChange}>
    <option value="">Select</option>
  </select>
</div>

        <div>
          <label htmlFor="block">Block:</label>
          <input type="text" id="block" name="block" value={formData.block} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="ho    useNumber">House Number:</label>
          <input type="text" id="houseNumber" name="houseNumber" value={formData.houseNumber} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="streetNumber">Street Number:</label>
          <input type="text" id="streetNumber" name="streetNumber" value={formData.streetNumber} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="pincode">Pincode:</label>
          <input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} />
        </div>
        
           

        <div>
          <label htmlFor="domicileCertificate">Domicile Certificate:</label>
          <input type="file" id="domicileCertificate" name="domicileCertificate" onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="studentPhoto">Student Photo:</label>
          <input type="file" id="studentPhoto" name="studentPhoto" onChange={handleChange} />
        </div>

        <div>
  <label htmlFor="idCard">ID Card:</label>
  <input type="file" id="idCard" name="idCard" onChange={handleChange} />
</div>

<div>
  <label htmlFor="casteCertificate">Caste Certificate:</label>
  <input type="file" id="casteCertificate" name="casteCertificate" onChange={handleChange} />
</div>

<div>
  <label htmlFor="previousYearMarksheet">Previous Year Marksheet:</label>
  <input type="file" id="previousYearMarksheet" name="previousYearMarksheet" onChange={handleChange} />
</div>

<div>
  <label htmlFor="currentYearFeeReceipt">Fee Receipt of Current Year:</label>
  <input type="file" id="currentYearFeeReceipt" name="currentYearFeeReceipt" onChange={handleChange} />
</div>

<div>
  <label htmlFor="bankPassport">Bank Passport (Front Page):</label>
  <input type="file" id="bankPassport" name="bankPassport" onChange={handleChange} />
</div>

<div>
  <label htmlFor="aadharCard">Aadhar Card:</label>
  <input type="file" id="aadharCard" name="aadharCard" onChange={handleChange} />
</div>

<div>
  <label htmlFor="tenthMarksheet">10th Class Marksheet:</label>
  <input type="file" id="tenthMarksheet" name="tenthMarksheet" onChange={handleChange} />
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
    
    
  );
};

export default Applyhere;
