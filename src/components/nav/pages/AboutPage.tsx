import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../index.css";

export default function AboutPage() {
  return (
    <div className="center">
      <div style={{ backgroundColor: "lightgray", textAlign: "center" }}>
        <h1 style={{ paddingTop: "5rem" }}>Dong Woo Lee</h1>
        <h2>이동우</h2>
        <p style={{ paddingBottom: "1rem", margin: "1rem" }}>
          Computer Science & Biology B.S. Student at UW-Madison
        </p>
        <Button
          variant="outline-dark"
          href="./DongWooLee_Resume.pdf"
          target="_blank"
          style={{ marginBottom: "2rem" }}
        >
          Resume
        </Button>
        <div style={{ paddingBottom: "2rem" }}>
          <a
            href="https://www.linkedin.com/in/dong-woo-lee"
            id="linkedin"
            className="me-3"
          >
            <svg
              className="icons"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 34 34"
              style={{ width: "3rem" }}
            >
              <path d="M34,3a3,3,0,0,0-3-3H3A3,3,0,0,0,0,3V31a3,3,0,0,0,3,3H31a3,3,0,0,0,3-3ZM10,29H5V12H10ZM7.5,10A2.5,2.5,0,1,1,10,7.5,2.5,2.5,0,0,1,7.5,10ZM29,29H24V21c0-1.9-1.4-2.5-2.3-2.5-1,0-2.7.8-2.7,2.5V29H14V12h4v2.3A4.6,4.6,0,0,1,22.6,11C26.4,11,29,13.1,29,17.8Z" />
            </svg>
          </a>
          <a href="https://github.com/don04lee" id="github">
            <svg
              className="icons"
              viewBox="0 0 16 16"
              version="1.1"
              aria-hidden="true"
              style={{ width: "3rem" }}
            >
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <br />
      <Container fluid={true} className="px-4 px-md-5 px-lg-6 px-xl-7 pt-5">
        <Row>
          <Col xs={12}>
            <h2>About</h2>
            <p>
              Hi, my name is Dong Woo Lee, a junior at University of
              Wisconsin-Madison majoring in Computer Science and Biology. I am
              very broadly interested in systems engineering, backend
              engineering, and AI/ML for scientific computing. I am currently
              have the fortune of working under{" "}
              <a
                href="https://en.wikipedia.org/wiki/Kevin_Eliceiri"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "blue" }}
              >
                Prof. Kevin Eliceiri{" "}
              </a>
              at the{" "}
              <a
                href="https://loci.wisc.edu/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "blue" }}
              >
                Laboratory for Optical and Computational Instrumentation (LOCI)
              </a>
              , where I focus on visualizing collagen fibers using 3D Fast
              Discrete Curvelet Transform (FDCT3D). I am also the Finance Chair
              for the Korean-American Student Association at University of
              Wisconsin-Madison.
            </p>
            <h2 style={{ marginTop: "2rem" }}>Experience</h2>

            <div style={{ display: "flex", alignItems: "center" }}>
              <a
                href="https://loci.wisc.edu/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "blue" }}
              >
                <img
                  src="./locilogobig.png"
                  style={{ width: "8rem", marginRight: "1rem" }}
                ></img>
              </a>
              <h5>
                Research Assistant at Laboratory for Optical and Computational
                Instrumentation [Jan. 2023 - Current]
              </h5>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <a
                href="https://www.whatcoffee.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "blue" }}
              >
                <img
                  src="./ACMlogo.png"
                  style={{ width: "8rem", marginRight: "1rem" }}
                ></img>
              </a>
              <h5>
                Lead Software Engineer (WhatCoffee) [May 2024 - Sept. 2024]
              </h5>
            </div>

            <div style={{ marginBottom: "5rem", marginTop: "2rem" }}>
              <h2>Interests</h2>
              <div>
                <ul>
                  <li>
                    I love organic chemistry, especially how it feels like a
                    puzzle with how different molecules interact
                    <ul>
                      <li>
                        This inspired me to make the{" "}
                        <a
                          href="https://github.com/don04lee/ochem-rxn"
                          style={{ textDecoration: "none" }}
                        >
                          {" "}
                          Organic Chemistry Reaction Predictor
                        </a>
                      </li>
                      <li>
                        Also made me major Biology at University of
                        Wisconsin-Madison on the side
                      </li>
                    </ul>
                  </li>
                  <li>
                    Music; I'm getting into back into Korean music right now,
                    but I also enjoy practicing the guitar
                  </li>
                  <li>
                    Pokemon, where I started playing during Generation 4, and
                    now I indulge in{" "}
                    <a
                      href="https://pokemonshowdown.com/"
                      style={{ textDecoration: "none" }}
                    >
                      Pokemon Showdown
                    </a>{" "}
                    every now and then
                  </li>
                  <li>
                    Helping others when deciding their course schedule; I plan
                    on using my{" "}
                    <Link to="/courses" style={{ textDecoration: "none" }}>
                      Courses
                    </Link>{" "}
                    tab to help both those that are majoring in Computer Science
                    or doing pre-med at University of Wisconsin-Madison with
                    their course selection{" "}
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
