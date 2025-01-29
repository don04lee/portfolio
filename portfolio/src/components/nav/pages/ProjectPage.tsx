import { Col, Container, Row } from "react-bootstrap";
import "../../../index.css";
import ProjectCards from "../../ProjectCard.tsx";

export default function ProjectPage() {
  return (
    <div className="center" style={{ textAlign: "center", paddingTop: "5rem" }}>
      <h1>Projects</h1>
      <br />
      <Container fluid>
        <Row>
          <Col xs={12}>
            <ProjectCards />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
