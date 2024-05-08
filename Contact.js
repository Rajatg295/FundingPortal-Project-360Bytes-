import React, { useState } from 'react';
import './ContactPage.css'; 
import Navbar from './Navbar';
import logo from './logo.png';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    
    <div>
      <header>
      <h1 style={{ margin:'0'}}>NATIONAL SCHOLARSHIP PORTAL</h1>
          <p>Government of India</p>
          </header>
      <Navbar/>
      <div style={{marginTop:'50px'}} className="contact-page-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
    </div>  
  );
};

export default ContactPage;
