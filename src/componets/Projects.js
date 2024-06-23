import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg3 from "../assets/img/project-img3.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg1 from "../assets/img/project-img1.png"
import masters from "../assets/pdf/masters.pdf";
import dist from "../assets/pdf/batch.pdf";




export const Projects = () => {
    const projects = [
        {
            title: "Building a neural network layer by layer",
            description: "Research project",
            imgUrl: masters,
            image: false,
        },
        {
            title: "Simulations of hybrid system using neural networks",
            description: "Research project",
            imgUrl: dist,
            image: false,
        },
        {
            title: "Cheopily",
            description: "Business start up",
            imgUrl: projImg3,
            image: true,
        },
        {
            title: "Neural network image transfer",
            description: "Business start up",
            imgUrl: projImg3,
            image: true,
        },
        {
            title: "Django blog  website",
            description: "Design and developement",
            imgUrl: projImg3,
            image: true,
        },
        {
            title: "image classification",
            description: "Design and developement",
            imgUrl: projImg3,
            image: true,
        }
    ]
    
    return (
        <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
              <div>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Research projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Showable</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}