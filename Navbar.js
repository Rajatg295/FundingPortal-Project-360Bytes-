import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: 'green', padding: '10px 0', textAlign: 'center' }}>
      <ul className="navbar-list" style={{ listStyle: 'none', margin: '0', padding: '0' }}>
        <li style={{ display: 'inline-block', margin: '0 10px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        </li>
        <li style={{ display: 'inline-block', margin: '0 10px' }}>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</Link>
        </li>
        <li style={{ display: 'inline-block', margin: '0 10px' }}>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</Link>
        </li>
        <li style={{ display: 'inline-block', margin: '0 10px' }}>
          <Link to="/registration" style={{ color: 'white', textDecoration: 'none' }}>New Registration</Link>
        </li>
        <li style={{ display: 'inline-block', margin: '0 10px' }}>
          <Link to="/applyhere" style={{ color: 'white', textDecoration: 'none' }}>Apply Here</Link>
        </li>
        <li style={{ display: 'inline-block', margin: '0 10px' }}>
          <Link to="/studenthomepage" style={{ color: 'white', textDecoration: 'none' }}>Student Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
