import { Col, Container, Tab, Row, Nav, ListGroup } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import ganProject from "../assets/img/gan.png";
import styleProject from "../assets/img/ganproject.png";
import projImg3 from "../assets/img/project-img3.png";
import mail from "../assets/img/mail.svg"
import app from "../assets/img/app.gif";
import app2 from "../assets/img/app2.gif";
import app3 from "../assets/img/app3.gif"
import masters from "../assets/pdf/masters.pdf.zip";
import dist from "../assets/pdf/batch.pdf";




export const Projects = () => {

  const research = [

    {
      title: "Building a neural network layer by layer",
      description: "Exploring the alternative approach of a neural network called: feed forward. It is found that feed forward can train a neural network around 50% faster with the same accuracy as backpropgation",
      imgUrl: masters,
      link: masters,
      image: false,
      classNames: "proj-imgbx",
      github: "https://github.com/runnily/forward-thinking",
      link: ""
    },
    {
      title: "Simulations of hybrid system using neural networks",
      description: "Research project",
      imgUrl: dist,
      link: dist,
      image: false,
      classNames: "proj-imgbx",
      github: "https://github.com/runnily/Simulations-of-hybrid-systems-using-neural-networks",
      link: ""

    }
  ]

  const projects = [
    {
      title: "Neural Style Transfer Web Application",
      description: "Utilized style transfer techniques to blend a content image with a style image, creating an output that combines the content of one with the artistic style of the other. Leveraged the VGG16 model to access layer information, effectively extracting and merging content and style details for impressive, visually appealing results",
      imgUrl: styleProject,
      link: "https://github.com/runnily/Style-Transfer-Django",
      image: true,
      classNames: "proj-imgbx",
      github: "https://github.com/runnily/Style-Transfer-Django",
    },
    {
      title: "Image to Image translation using Gans",
      description: "Employing Generative Adversarial Networks (GANs) for image translation between humans and cats/dogs",
      imgUrl: ganProject,
      link: "https://github.com/runnily/keras-examples/tree/main",
      image: true,
      classNames: "proj-imgbx",
      github: "https://github.com/runnily/keras-examples/tree/main",
    },
    {
      title: "Django blog  website",
      description: "Created a dynamic blog website using Django, designed for users to create, edit, and delete blog posts. The website supports user authentication, allowing registered users to manage their own posts.",
      link: "https://github.com/runnily/Blog-website",
      imgUrl: projImg3,
      image: true,
      classNames: "proj-imgbx",
      github: "https://github.com/runnily/Blog-website",
      link: "https://djangoexp.herokuapp.com/post/1",
    },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2 >Projects</h2>
              <p style={{ textAlign: "center" }}>
                During my computer science studies and professional experience,
                I have developed a variety of projects, all of which can be found on my GitHub.
                Here are a few projects that I particularly enjoyed, found novel, and felt satisfied completing.
                These are divided into general projects, research projects specifically in deep learning, and application development.</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">General</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Cheopily: Food application</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Research projects</Nav.Link>
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
                  <Tab.Pane eventKey="second">
                    <Tab.Container className="cheopily-description" id="list-group-tabs-example" defaultActiveKey="#link3">
                      <Row>
                        <Col sm={3} className="justify-content-center">
                          <ListGroup className="app-features">
                            <ListGroup.Item className="app-features" action href="#link3">
                              Overview
                            </ListGroup.Item>
                            <ListGroup.Item className="app-features" action href="#link4">
                              Key Features
                            </ListGroup.Item>
                            <ListGroup.Item className="app-features" action href="#link5">
                              Focus
                            </ListGroup.Item>
                          </ListGroup>
                        </Col>
                        <Col >
                          <Tab.Content>
                            <Tab.Pane eventKey="#link3">
                              <p>
                                This upcoming application is designed to help users find the most affordable groceries from various UK supermarkets while providing culinary inspiration through a social platform.
                              </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link4">
                              <p>
                                <span style={{ color: "white", fontWeight: "bold" }}>
                                  Cheapest Groceries:
                                </span>  Identify the cheapest products available across different supermarkets.
                              </p>

                              <p>
                                <span style={{ color: "white", fontWeight: "bold" }}>
                                  Social Platform:
                                </span> Discover and share meals, ingredients, and recipes through images, GIFs, and videos. Users can save and share visuals, curating collections based on themes or events.
                              </p>
                              <p>
                                <span style={{ color: "white", fontWeight: "bold" }}>
                                  Social Platform:
                                </span> An algorithm recommends products and meals aligned with users' dietary preferences, streamlining the transition to new dietary regimens.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link5">
                              <p>
                                The application maintains its core purpose as a grocery-finding tool but is now enhanced with a social aspect that facilitates inspiration and sharing among users, promoting the discovery of new and culturally diverse dishes.
                              </p>
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>

                    <Row>
                      <Col size={12} sm={6} md={4}>
                        <div>
                          <img src={app} />
                          <div className="proj-txtx">
                            <h4>Cheopily</h4>
                            <span>"Currently developing a mobile application designed to help users find food inspiration tailored to their dietary preferences and restrictions. The app aims to provide personalized meal suggestions and recipes based on user input."</span>
                          </div>
                        </div>
                      </Col>
                      <Col size={12} sm={6} md={4}>
                        <div>
                          <img src={app2} />
                          <div className="proj-txtx">
                            <h4>Cheopily</h4>
                            <span>"Currently developing a mobile application designed to help users find food inspiration tailored to their dietary preferences and restrictions. The app aims to provide personalized meal suggestions and recipes based on user input."</span>
                          </div>
                        </div>
                      </Col>

                      <Col size={12} sm={6} md={4}>
                        <div>
                          <img src={app3} />
                          <div className="proj-txtx">
                            <h4>Cheopily</h4>
                            <span>"Currently developing a mobile application designed to help users find food inspiration tailored to their dietary preferences and restrictions. The app aims to provide personalized meal suggestions and recipes based on user input."</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <br />
                    <span className="d-flex justify-content-center navbar-text">
                      <button className="vvd link-button" onClick={(e) => window.location.href = "https://www.linkedin.com/in/adanna-obibuaku/"}>
                        <img src={mail} alt="mail icon" style={{ width: '15%' }} />
                        <span>   Get in touch!</span></button>
                    </span>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {
                        research.map((project, index) => {
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