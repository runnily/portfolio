import { Col, ListGroup, Tab, Row } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import bulletPoint from "../assets/img/bulletPoint.svg"

export const Experience = () => {
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
    <section className="experience" id="experience">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center wow zoomIn">
              <div class="tabs">

                <input type="radio" name="tabs" id="tabone" defaultChecked="true" />
                <label id="about" for="tabone">About me</label>
                <div class="tab">
                  <h1>About me</h1>
                  <p>
                    I am a data engineer leveraging technologies like Scala,
                    Google Cloud Platform, and Python in my day-to-day work
                    to build robust data pipelines that support machine learning
                    models. From requirements
                    gathering to deployment, I ensure data quality, privacy, and
                    timely data delivery across data engineering platforms.



                  </p>
                  <p>
                    In my spare time, I dive into deep learning projects, especially those involving image processing and research.
                    I also enjoy taking long hikes, getting lost in YouTube videos about physics (particularly topics involving particle acceleration),
                    pondering philosophical questions, and cooking to unwind.
                  </p>
                </div>

                <input type="radio" name="tabs" id="tabtwo" />
                <label for="tabtwo">Experience</label>
                <div class="tab">
                  <h1>Experience</h1>
                  <h5>
                    <span><img className="icon" src={bulletPoint} alt="bullet-point"></img></span> Data engineer, Spotify Oct 2022 – Current
                  </h5>
                  <p>
                    Building data engineering projects from requirements gathering to ensuring data operations run smoothly, data arrives correctly, and data privacy standards are adhered to. Delivers features to machine learning platforms utilizing technologies and languages such as Scala, Python, Dataflow, and Google Cloud Platform.                                </p>
                  <p>
                    Reduced costs and runtime of the data pipeline, saving the team months of work, by utilizing a technique called sort-merge buckets, which avoids shuffling in a distributed data processing system.</p>

                  <h5>
                    <span><img className="icon" src={bulletPoint} alt="bullet-point"></img></span> Data engineer Intern, Spotify Jan 2022 – Current
                  </h5>
                  <p>
                    Led an A/B test from drafting requirements to investigating the effectiveness of the Coldstart model, a regression neural network ranking algorithm suggesting artists to new users.
                  </p>
                  <p>
                    Implemented a daily batch pipeline to calculate the NDCG metric, measuring the ranking quality of the suggested artists.
                  </p>

                  <h5>
                    <span><img className="icon" src={bulletPoint} alt="bullet-point"></img></span> Web developer Intern, Newcastle Research software engineeringb  Jun 2021 – Aug 2021
                  </h5>
                  <p>
                    Developed a web application that organizes department members and their assigned projects, resulting in improved project tracking and team management efficiency.
                  </p>
                  <p>
                    Leveraged the HubSpot REST API to fetch and integrate data on projects and members, enabling seamless data synchronization and access across the application.
                  </p>

                  <h5>
                    <span><img className="icon" src={bulletPoint} alt="bullet-point"></img></span> Web App developer, Rent-A-writer Mar 2020 – Aug 2021
                  </h5>
                  <p>
                    Independently designed and developed a web application to create a digital platform for a small company, streamlining customer interactions and improving task management efficiency.
                  </p>
                </div>

                <input type="radio" name="tabs" id="tabthree" />
                <label for="tabthree">Education</label>
                <div class="tab">
                  <h1>Education</h1>

                  <h5>
                    <span><img className="icon" src={bulletPoint} alt="bullet-point"></img></span> Newcastle University | BSc Honours Computer science | Awared first class | 2018 – 2021
                  </h5>
                  <p>
                    <span style={{ color: "white" }}>Key Modules:</span> Algorithm Design and analysis (82%), Data Technology (92%), Computer Networks (90%)
                  </p>

                  <h5>
                    <span><img className="icon" src={bulletPoint} alt="bullet-point"></img></span> Newcastle University | MSc data science and AI  | Awared Distinction | 2021 – 2022
                  </h5>
                  <p>
                    <span style={{ color: "white" }}>Key Modules:</span> Deep learning consiting of backpropgation, convolution neural networks, recurrant neural networks and natural lanuage processing (NLP) and  Generative Adversarial Networks (82%), Machine learning with project (76%), Statistical Learning for Data Science (72%)
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}