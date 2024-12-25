import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About Us';
import Service from '../Service/Service';
import Blogs from '../Blogs/Blogs';
import Franciese from '../Franciese/Franciese';
import Contact from '../Contact/Contact';
import React, { useState } from 'react';
import Insert from '../Rest API/Insertprocess';
import './Navbar.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';


function MyNavbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Router>
        <Navbar style={{ backgroundColor: 'red' }} light expand="md" sticky="top"{...args}>

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mx-auto" navbar>
              <NavItem>
                <NavLink href="/" className='nav-link-custom' style={{ color: 'white' }}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/About" className='nav-link-custom' style={{ color: 'white' }}>About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Service" className='nav-link-custom' style={{ color: 'white' }}>Service</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Blogs" className='nav-link-custom' style={{ color: 'white' }}>Blogs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Franciese" className='nav-link-custom'style={{ color: 'white' }}>Franciese</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Contact" className='nav-link-custom'style={{ color: 'white' }}>Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About Us />} />
          <Route path='/Service' element={<Service />} />
          <Route path='/Blogs' element={<Blogs />} />
          <Route path='/Franciese' element={<Franciese />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insert" element={<Insert />} />
        </Routes>
      </Router>
    </>
  );
}

export default MyNavbar;
