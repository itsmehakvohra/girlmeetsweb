import { Col, Container, Navbar, Row } from "react-bootstrap";
import girlducky from "../images/girl_ducky.webp";

// hi
function Home() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" />
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
