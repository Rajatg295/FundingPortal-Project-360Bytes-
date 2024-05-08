import React, { useState } from 'react';
import Navbar from './Navbar';
import backgroundImage from './img3.jpg';
import logo from './logo.png';  

const logoStyle = {
  position: 'absolute',
  top: '20px', 
  left: '20px', 
  width: '100px', 
  height: 'auto', 
};
const LatestUpdates = () => {
  return (
    <div className="updates-container">
      <div className="latest-updates">
        <ul style={{ paddingLeft: '20px', paddingRight: '20px' }}>
          <h2 style={{ marginBottom: '0' }}>Latest Updates</h2>
          <li style={{ marginBottom: '10px' }}>
            <p style={{ paddingLeft: '20px', marginBottom: '10px' }}>We're excited to announce that several new funding opportunities have been added to our portal! Whether you're a budding entrepreneur, a small business owner, or a nonprofit organization, there's something for everyone.</p>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <p style={{ paddingLeft: '20px', marginBottom: '10px' }}>Are you working on groundbreaking research or developing innovative technologies? Apply for our Innovation Grants to fuel your projects and bring your ideas to life.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Helpdesk = () => {
  return (
    <div className="helpdesk-container">
      <div className="helpdesk">
        <ul style={{ paddingLeft: '20px', paddingRight: '20px', maxHeight: '200px', overflow: 'auto' }}>
          <h2>Helpdesk</h2>
          <li style={{ marginBottom: '10px' }}>
            <p>Welcome to our helpdesk! Our team is here to assist you with any questions or concerns you may have regarding our funding portal. Here's how you can reach us:</p>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Email:</strong> support@fundingportal.com
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Phone:</strong> +1 (123) 456-7890
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Live Chat:</strong> Visit our website and click on the chat icon in the bottom right corner to chat with a support representative in real-time.
          </li>
          <li style={{ marginBottom: '10px' }}>
            Our team is available Monday to Friday from 9:00 AM to 5:00 PM EST. We're here to help you navigate our portal, answer your questions about funding opportunities, and provide assistance with any technical issues you may encounter.
          </li>
        </ul>
      </div>
    </div>
  );
};

const DetailedDescription = () => {
  return (
    <div className="detailed-description">
      <div className="detailed-description" style={{ paddingLeft: '50px', paddingRight: '50px' }}>
        <h2>Detailed Description of Portal</h2>
        <p>Welcome to our funding portal! Our platform is designed to connect individuals, businesses, and organizations with various funding opportunities to support their projects and initiatives. Here's what you need to know:</p>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>Wide Range of Funding Options:</strong> Whether you're a startup seeking seed funding, a nonprofit organization looking for grants, or an academic institution pursuing research funding, our portal offers a diverse range of funding options tailored to your needs.</li>
          <li><strong>User-Friendly Interface:</strong> Our portal features an intuitive and easy-to-navigate interface, making it simple for users to search for funding opportunities, submit applications, and track their progress.</li>
          <li><strong>Expert Guidance:</strong> Our team of experts is dedicated to providing guidance and support throughout the funding process. From reviewing application materials to offering personalized advice, we're here to help you succeed.</li>
        </ul>
      </div>
    </div>
  );
};

const UserLogin = ({ userType, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Logging in as ${userType} with username: ${username} and password: ${password}`);
    onLogin(); 
  };

  return (
    <div className="user-login" style={{ textAlign: 'center', maxWidth: '300px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '20px', color: 'green' }}>{userType} Login</h2>
      <form onSubmit={handleLogin}>
        <label style={{ marginBottom: '10px', display: 'block' }}>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{ marginLeft: '5px' }} />
        </label>
        <label style={{ marginBottom: '10px', display: 'block' }}>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginLeft: '5px' }} />
        </label>
        <a href="#" style={{ display: 'block', marginBottom: '10px', color: 'blue', textDecoration: 'none' }}>Forgot Password?</a>
        <button type="submit" style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>Login</button>
      </form>
    </div>
  );
};

const LoginPage = ({ onLogin }) => {
  const [selectedUserType, setSelectedUserType] = useState('Student');

  const handleLogin = () => {
    onLogin(); 
  };

  return (
    <div className="login-page">
      <h2 style={{ marginLeft: '50px' }}>Select User Type</h2>
      <div className="user-type-buttons" style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
        <button className='btn' style={{ borderRadius: '5px', margin: '0 5px', color: 'white', backgroundColor: 'orange' }} onClick={() => setSelectedUserType('Student')}>Student</button>
        <button className='btn' style={{ borderRadius: '5px', margin: '0 5px', color: 'white', backgroundColor: 'orange' }} onClick={() => setSelectedUserType('Institute')}>Institute</button>
        <button className='btn' style={{ borderRadius: '5px', margin: '0 5px', color: 'white', backgroundColor: 'orange' }} onClick={() => setSelectedUserType('Ministry')}>Ministry</button>
        <button className='btn' style={{ borderRadius: '5px', margin: '0 5px', color: 'white', backgroundColor: 'orange' }} onClick={() => setSelectedUserType('State')}>State</button>
      </div>
      {selectedUserType && <UserLogin userType={selectedUserType} onLogin={handleLogin} />}
    </div>
  );
};

const Home = ({ onLogin }) => {
    const [loggedIn, setLoggedIn] = useState(false); 

    const handleLogin = () => {
      setLoggedIn(true); 
    };
  
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
      <Navbar />
      <div className="container">
        <div className="left-section">
          <div className="updates-container">
            <LatestUpdates />
          </div>
          <div className="helpdesk-container">
            <Helpdesk />
          </div>
        </div>
        <div className="middle-section">
          <DetailedDescription />
        </div>
        <div className="right-section">
          <LoginPage onLogin={onLogin} />
          
        </div>
      </div>
    </div>
  );
};

export default Home;
