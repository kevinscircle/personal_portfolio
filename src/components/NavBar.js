import React, {useState, useEffect} from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'




 function NavBar() {

const [activeLink, setActiveLink] = useState('home');
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
const onScroll = () => {
    if(window.scrollY > 50){
        setScrolled(true);
    } else {
        setScrolled(false)
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
}
},[])

const onUpdateActiveLink = (value) => {
setActiveLink(value);
}

    return ( 
    
        // bg-body-tertiary 
    <Navbar expand="md" className={scrolled ?  'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
            {/* <img src={logo}  alt="logo"/> */}
            <img className='logo-image-nav' src='https://i.pinimg.com/564x/c4/b9/16/c4b9161376646ac4a3a740b7aee29706.jpg'  alt="logo"/>
        </Navbar.Brand>   
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
         
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/kevin-reyes-circle/'><img src={navIcon1} alt=''/></a>
                <a href='#'><img src={navIcon2} alt=''/></a>
                <a href='#'><img src={navIcon3} alt=''/></a>
            </div>
            <button type='button'>
                <span>
                    Lets connect
                </span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

     );
}

export default NavBar;


/*  to do list 


* add function to button for lets connect 

* confused on scroll variable 
* confused on scrolled state and setting string 'scrolled'  ln 40 


*/