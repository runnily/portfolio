import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import percent70 from "../assets/img/70percent.svg";
import percent80 from "../assets/img/80percent.svg";
import percent90 from "../assets/img/90percent.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={percent90} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={percent90} alt="Image" />
                                <h5>Scala</h5>
                            </div>
                            <div className="item">
                                <img src={percent90} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={percent80} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={percent70} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={percent90} alt="Image" />
                                <h5>Jupyter</h5>
                            </div>
                            <div className="item">
                                <img src={percent80} alt="Image" />
                                <h5>Pandas</h5>
                            </div>
                            <div className="item">
                                <img src={percent80} alt="Image" />
                                <h5>NumPy</h5>
                            </div>
                            <div className="item">
                                <img src={percent80} alt="Image" />
                                <h5>Seaborn</h5>
                            </div>
                            <div className="item">
                                <img src={percent80} alt="Image" />
                                <h5>Matplotlib</h5>
                            </div>
                            <div className="item">
                                <img src={percent80} alt="Image" />
                                <h5>Sklearn</h5>
                            </div>
                            <div className="item">
                                <img src={percent80} alt="Image" />
                                <h5>Keras</h5>
                            </div>
                            <div className="item">
                                <img src={percent70} alt="Image" />
                                <h5>Pytorch</h5>
                            </div>
                            <div className="item">
                                <img src={percent90} alt="Image" />
                                <h5>Google cloud project</h5>
                            </div>
                            <div className="item">
                                <img src={percent90} alt="Image" />
                                <h5>Dataflow</h5>
                            </div>
                            <div className="item">
                                <img src={percent80} alt="Image" />
                                <h5>Machine learning</h5>
                            </div>
                            <div className="item">
                                <img src={percent80} alt="Image" />
                                <h5>Image classification</h5>
                            </div>
                            </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}