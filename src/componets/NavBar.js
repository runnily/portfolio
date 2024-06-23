import {Nav, Navbar, Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import logo from "../assets/img/logo.png"
import linkedin from "../assets/img/linkedin.svg"
import mail from "../assets/img/mail.svg"
import github from "../assets/img/github.svg"



export const NavBar = () => {
    const [activeLink, setActiveLink]  = useState('home');
    const [scrolled, seScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll); // remove event
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);

    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" id="logo" style={{borderRadius: "50%"}}/>
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
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/adanna-obibuaku/"><img src={linkedin} alt="" /></a> 
                <a href='#' onClick={(e) => {window.location.href = "mailto:aaddanna@outlook.com"; e.preventDefault();}}>
                <img src={mail} alt="" /></a>               
                <a href="https://github.com/runnily"><img src={github} alt="" /></a>
              </div>
                <button className="vvd"><span>Let’s Connect</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}