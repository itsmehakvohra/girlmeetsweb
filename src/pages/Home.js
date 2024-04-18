import { Col, Container, Navbar, Nav, Row } from "react-bootstrap";
import girlducky from "../images/girl_ducky.webp";

function Home() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>Girl Meets Web</Navbar.Brand>
          <Navbar.Collapse>
            <Nav>
              <Nav.Link />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <img src={girlducky} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
