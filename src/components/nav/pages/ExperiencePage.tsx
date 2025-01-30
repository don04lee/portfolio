import { Col, Container, Row } from "react-bootstrap";
import "../../../index.css";

export default function ProjectPage() {
  return (
    <div className="center" style={{ textAlign: "center" }}>
      <h1>Experience</h1>
      <br />
      <Container fluid={true}>
        <Row>
          <Col xs={12}>
            <p>
              Organic Chemistry Reaction Predictor is a website that uses the{" "}
              <a href="https://rxn.app.accelerate.science/rxn">
                IBM RXN for Chemistry
              </a>{" "}
              to predict organic chemistry reactions.
            </p>
            <p>
              Project by <a href="https://github.com/don04lee">Dong Woo Lee</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
