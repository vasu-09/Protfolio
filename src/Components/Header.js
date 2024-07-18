import React, { useEffect, useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'

const Header = () => {

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const projectsSection = document.getElementById('projects');
      const skillsSection = document.getElementById('skills');
      const contactSection = document.getElementById('contact');

      const scrollPosition = window.scrollY + 200;

      if (contactSection && scrollPosition >= contactSection.offsetTop) {
        setActiveSection('contact');
      } else if (skillsSection && scrollPosition >= skillsSection.offsetTop) {
        setActiveSection('skills');
      } else if (projectsSection && scrollPosition >= projectsSection.offsetTop) {
        setActiveSection('projects');
      } else if (aboutSection && scrollPosition >= aboutSection.offsetTop) {
        setActiveSection('about');
      } else if (homeSection && scrollPosition >= homeSection.offsetTop) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand style={{marginLeft:'150px'}}href="#home">Srinivas</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className='ml-auto' id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Link className={activeSection === 'home' ? 'active' : ''} style={{marginRight:'50px'}} href="#home">Home</Nav.Link>
        <Nav.Link className={activeSection === 'about' ? 'active' : ''} style={{marginRight:'50px'}} href="#about">About</Nav.Link>
          <Nav.Link className={activeSection === 'projects' ? 'active' : ''} style={{marginRight:'50px'}} href="#projects">Projects</Nav.Link>
          <Nav.Link className={activeSection === 'skills' ? 'active' : ''} style={{marginRight:'50px'}} href="#skills">Skills</Nav.Link>
          <Nav.Link className={activeSection === 'contact' ? 'active' : ''} style={{marginRight:'100px'}} href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <style>
        {`
        .navbar-nav {
            margin-left: auto;
        }
  
         @media (max-width: 767.98px) {
        .navbar-nav {
            text-align: center;
            width: 100%;
        }
  
        .navbar-nav .nav-link {
            display: block;
            width: 100%;
        }
        }`
        }
    </style>
    </div>
  )
}

export default Header
