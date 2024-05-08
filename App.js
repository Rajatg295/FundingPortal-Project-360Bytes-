import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NewRegistration from './NewRegistration';
import './styles.css'; 
import Navbar from './Navbar';
import StudentHomepage from './StudentHomepage';
import Applyhere from './Applyhere';

const App = () => {
  
  return (
    <Router>
      <div>   
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<NewRegistration/>} />
        <Route path="/studenthomepage" element={<StudentHomepage />}/>
        <Route path="/applyhere" element={<Applyhere />}/>
      </Routes>
      </div>
    </Router>
  );
};

export default App;
