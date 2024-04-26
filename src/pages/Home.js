import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Row,
  Button,
  Modal,
  InputGroup,
} from "react-bootstrap";
import { Table } from "../components/table";
import { TableContainer } from "../components/layout/TableContainer";
import { createDeck, shuffleDeck } from "../components/deck";

import { BlindInput, ModalInput } from "../components/ModalInputs";
import { BuyInButton, BuyInContainer, BuyInInput } from "../components/BuyIn";

function Home() {
  const [deck, setDeck] = useState([]);
  const [show, setShow] = useState(true);
  const [showInputModal, setInputModal] = useState(false);
  const [showGameModal, setGameModal] = useState(false);

  const DealNewHand = () => {
    const newDeck = shuffleDeck(createDeck());
    const hand = newDeck.slice(0, 5);
    setDeck(newDeck.slice(5));
    console.log("Dealt hand:", hand);
    return hand;
  };

  const openInputModal = () => {
    setShow(false);
    setInputModal(true);
  };

  const openGameModal = () => {
    setShow(false);
    setGameModal(true);
  };

  return (
    <>
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        style={{ top: "30%" }}
      >
        <Modal.Header>
          <Modal.Title>Girl Meets Web Poker Club ♠️</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Welcome! You can either create or join a poker game using the options
          below.
          <br /> <br />- M
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={openInputModal}>
            Input Code
          </Button>
          <Button variant="primary" onClick={openGameModal}>
            Create a Game
          </Button>
        </Modal.Footer>
      </Modal>

      {/*Modal Input Code */}
      <Modal
        show={showInputModal}
        backdrop="static"
        keyboard={false}
        style={{ top: "30%" }}
      >
        <Modal.Header>
          <Modal.Title>Input a Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-10">
            <b>Your Name</b>
          </p>
          <ModalInput onChange={(e) => setName(e.target.value)} />
          <p className="mt-20 mb-10">
            <b>Code</b>
          </p>
          <ModalInput onChange={(e) => setGameCode(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={""}>
            Enter Game
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal to Create a Game */}
      <Modal
        show={showGameModal}
        backdrop="static"
        keyboard={false}
        style={{ top: "30%" }}
      >
        <Modal.Header>
          <Modal.Title>Create a Game</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-10">
            <b>Your Name</b>
          </p>{" "}
          <ModalInput onChange={(e) => setName(e.target.value)} />
          <p className="mt-20 mb-10">
            <b>Blinds (Chips)</b>
          </p>{" "}
          <InputGroup>
            <BlindInput
              placeholder="SB"
              onChange={(e) => setSmallBlind(e.target.value)}
            />{" "}
            <p className="mr-10 ml-10">
              <b>/</b>
            </p>{" "}
            <BlindInput
              placeholder="BB"
              onChange={(e) => setBigBlind(e.target.value)}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={""}>
            Get Started
          </Button>
        </Modal.Footer>
      </Modal>

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
      <BuyInContainer>
        <BuyInInput type="number" placeholder="$10.00" />
        <BuyInButton>Buy In</BuyInButton>
      </BuyInContainer>
    </>
  );
}

export default Home;
