import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Projects } from "../data/projects.tsx";

const ProjectCards = () => {
  return (
    <Container className="mt-4">
      <Row className="g-4">
        {Projects.map((project, index) => (
          <Col key={index} md={6} lg={4}>
            <Card className="shadow-sm">
              <img
                src={project.imageSrc}
                alt={project.projectName}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{project.projectName}</Card.Title>
                <Card.Text>{project.projectDesc}</Card.Text>
                <Card.Text style={{ fontStyle: "italic" }}>
                  {project.tools}
                </Card.Text>
                {project.githubLink && (
                  <Button
                    variant="outline-primary"
                    href={project.githubLink}
                    target="_blank"
                  >
                    GitHub
                  </Button>
                )}
                {project.websiteLink && (
                  <Button
                    variant="outline-secondary"
                    href={project.websiteLink}
                    target="_blank"
                    className="ms-2"
                  >
                    Visit Website
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectCards;
