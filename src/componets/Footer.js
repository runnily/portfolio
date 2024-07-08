import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png"
import linkedin from "../assets/img/linkedin.svg"
import mail from "../assets/img/mail.svg"
import github from "../assets/img/github.svg"


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo" className="logo" style={{ borderRadius: "50%" }} />
                    </Col>
                    <Col sm={6} className="text-center text=sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/adanna-obibuaku/">
                                <img href="" src={linkedin} alt="linkedin-icon">
                                </img>
                            </a>
                            <a href='#' onClick={(e) => { window.location.href = "mailto:aaddanna@outlook.com"; e.preventDefault(); }}>
                                <img src={mail} alt="mail-to-icon" />
                            </a>
                            <a href="https://github.com/runnily">
                                <img src={github} alt="github icon">
                                </img>
                            </a>

                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}