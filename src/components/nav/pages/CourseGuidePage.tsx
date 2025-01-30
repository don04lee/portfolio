import { Col, Container, Row } from "react-bootstrap";
import "../../../index.css";

export default function CourseGuidePage() {
  return (
    <div className="center" style={{ textAlign: "center", paddingTop: "5rem" }}>
      <h1>Course Guide</h1>
      <h2>Under Development</h2>
      <br />
      <Container fluid={true}>
        <Row>
          <Col xs={12}>
            {/* <p>
              Organic Chemistry Reaction Predictor is a website that uses the{" "}
              <a href="https://rxn.app.accelerate.science/rxn">
                IBM RXN for Chemistry
              </a>{" "}
              to predict organic chemistry reactions.
            </p>
            <p>
              Project by <a href="https://github.com/don04lee">Dong Woo Lee</a>
            </p> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
