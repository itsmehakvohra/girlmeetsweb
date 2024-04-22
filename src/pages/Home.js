import React, { useState } from "react";
import { Container, Navbar, Nav, Row, Button } from "react-bootstrap";
import { Table } from "../components/table";
import { TableContainer } from "../components/layout/TableContainer";
import { createDeck, shuffleDeck } from "../components/deck";

function Home() {
  const [deck, setDeck] = useState([]);

  const DealNewHand = () => {
    const newDeck = shuffleDeck(createDeck());
    const hand = newDeck.slice(0, 5);
    setDeck(newDeck.slice(5));
    console.log("Dealt hand:", hand);
    return hand;
  };

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
        <TableContainer>
          <Row>
            <Table />
            <Button
              style={{ backgroundColor: "#003a62", border: "none" }}
              onClick={DealNewHand}
            >
              Deal Cards
            </Button>
          </Row>
        </TableContainer>
      </Container>
    </>
  );
}

export default Home;
