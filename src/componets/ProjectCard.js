
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, image }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        {
          image ?(<img src={imgUrl} />)
          : (<object data={imgUrl} type="application/pdf" height="100%"/>)
        }
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}