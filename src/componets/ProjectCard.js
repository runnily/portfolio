
import { Col } from "react-bootstrap";
import githubIcon from "../assets/img/github.svg"
import openLink from "../assets/img/openLink.svg"



export const ProjectCard = ({ title, description, imgUrl, image, classNames, github, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className={classNames}>
        {
          image ? (<img src={imgUrl} />)
            : (<object data={imgUrl} type="application/pdf" height="100%" />)
        }
        <div className="proj-txtx">
          <h4>{title}</h4>
          <a href={github}>
            <img style={{ width: "24px", height: "24px" }} src={githubIcon} alt="github icon">
            </img>
          </a>
          {
            link ? (<a href={link}>
              <img style={{ width: "24px", height: "24px" }} src={openLink} alt="github icon">
              </img></a>) : (<br />)

          }
          <br />
          <br />
          <span>{description}
          </span>
        </div>
      </div>
    </Col>
  )
}