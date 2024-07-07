import { useState, useEffect } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import {Container, Row, Col} from "react-bootstrap";
import headerImg from "../assets/img/cat.gif";

export const Banner = () => {
    const [num, setNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Data engineer", "Machine engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000

    useEffect( () => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {
            clearInterval(ticker)
        }
    }, [text])

    const tick = () => {
        let idx = num % toRotate.length;
        let fullText = toRotate[idx];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setNum(num + 1);
            setDelta(500);
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">å
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                                Welcome to my portfolio
                                </span>
                                <h1>
                                    {`Hey! I'm Adanna`}
                                    <br/>
                                    <span className="wrap">
                                        {text}
                                    </span>
                                    <br/>
                                    <br/>
                                    <p style={{color: "black"}}>
                                    I am a Data Engineer at Spotify, specializing in 
                                    building and optimizing data pipelines with Scala, 
                                    Python, Google Dataflow, and other Google Cloud 
                                    tools to support machine learning models. 
                                    I enjoy exploring new computer science projects 
                                    and have a strong interest in machine learning research. 
                                
                                    </p>
                                    <p style={{color: "black"}}>
                                    In my free time, I watch educational videos on history, philosophy, astronomy, and cognitive science
                                    Outside of tech, I love long hikes and experimenting with cooking new recipes. 😊 
                                    </p>
                                    <button onClick={ () => console.log('console')}>
                                        Lets connect <ArrowRightCircle onClick={(e) => window.location.href = "https://www.linkedin.com/in/adanna-obibuaku/"} size={25}></ArrowRightCircle>
                                    </button>
                                </h1>
                        
                    </Col>
                    <Col cs={2} md={6} xl={5}>
                        <img src={headerImg} alt="Header img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}