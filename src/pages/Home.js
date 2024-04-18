import { Col, Container, Navbar, Nav, Row } from "react-bootstrap";
import girlducky from "../images/girl_ducky.webp";

function Home() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Girl Meets Web</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
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
