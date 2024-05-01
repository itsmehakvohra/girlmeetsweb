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
import { PotMarker, PotMarkerContainer } from "../components/Pot";
import { OpenMarker, TakenMarker } from "../components/OpenMarker";

function Home() {
  const [players, setPlayers] = useState([
    { id: 1, playerName: "One", buyChipsNum: "10" },
    { id: 2, playerName: "Two", buyChipsNum: "30" },
    { id: 3, playerName: "Three", buyChipsNum: "25" },
    { id: 4, playerName: "Four", buyChipsNum: "10" },
  ]);

  const [deck, setDeck] = useState([]);
  const [communityCards, setCommunityCards] = useState([]);

  const [show, setShow] = useState(true);
  const [showInputModal, setInputModal] = useState(false);
  const [showGameModal, setGameModal] = useState(false);

  const [dealPhase, setDealPhase] = useState(1);

  const [smallBlind, setSmallBlind] = useState("");
  const [bigBlind, setBigBlind] = useState("");

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

  const DealCards = () => {
    if (dealPhase <= 3) {
      let cardsToDeal;
      switch (dealPhase) {
        case 1:
          cardsToDeal = 3;
          break;
        case 2:
        case 3:
          cardsToDeal = 1;
          break;
        default:
          break;
      }

      setCommunityCards(communityCards.concat(deck.slice(0, cardsToDeal)));
      setDeck(deck.slice(cardsToDeal));
      setDealPhase(dealPhase + 1);
    } else {
      // Reset for the next round and deal new player hands
      setCommunityCards([]);
      setDealPhase(1);
      DealNewHand();
    }
  };

  const handleCloseInput = () => setInputModal(false);
  const handleCloseGame = () => setGameModal(false);

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
          Welcome! Please decide if you would like to create a game or join a
          game using a code. Each game has a maximum of 8 players.
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
        onHide={handleCloseInput}
        backdrop="static"
        keyboard={false}
        style={{ top: "30%" }}
      >
        <Modal.Header closeButton>
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
        onHide={handleCloseGame}
        backdrop="static"
        keyboard={false}
        style={{ top: "30%" }}
      >
        <Modal.Header closeButton>
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
            <Table>
              <PotMarkerContainer>
                <PotMarker>
                  <p className="white">Pot: $0.00</p>
                </PotMarker>
              </PotMarkerContainer>

              {communityCards.map((card, index) => (
                <>
                  <img
                    key={index}
                    src={""}
                    alt={`${card.value} of ${card.suit}`}
                    style={{
                      maxHeight: "185px",
                      marginRight: "10px",
                      marginTop: "20px",
                    }}
                  />
                </>
              ))}
            </Table>
            <Button
              style={{ backgroundColor: "#003a62", border: "none" }}
              onClick={DealCards}
            >
              Deal Cards
            </Button>
          </Row>
        </TableContainer>
        {!players || !players[0] ? (
          <OpenMarker style={{ left: "30%", top: "75%" }}>Open</OpenMarker>
        ) : (
          <TakenMarker style={{ left: "30%", top: "75%" }}>
            <p className="mb-0">
              <b>{players[0].playerName}</b>
              <br />
              {players[0].buyChipsNum}c
            </p>
          </TakenMarker>
        )}
        {!players || !players[1] ? (
          <OpenMarker style={{ left: "12%", top: "58%" }}>Open</OpenMarker>
        ) : (
          <TakenMarker style={{ left: "12%", top: "58%" }}>
            <p className="mb-0">
              <b>{players[1].playerName}</b>
              <br />
              {players[1].buyChipsNum}c
            </p>
          </TakenMarker>
        )}
        {!players || !players[2] ? (
          <OpenMarker style={{ left: "12%", top: "25%" }}>Open</OpenMarker>
        ) : (
          <TakenMarker style={{ left: "12%", top: "25%" }}>
            <p className="mb-0">
              <b>{players[2].playerName}</b>
              <br />
              {players[2].buyChipsNum}c
            </p>
          </TakenMarker>
        )}
        {!players || !players[3] ? (
          <OpenMarker style={{ left: "30%", top: "12%" }}>Open</OpenMarker>
        ) : (
          <TakenMarker style={{ left: "30%", top: "12%" }}>
            <p className="mb-0">
              <b>{players[3].playerName}</b>
              <br />
              {players[3].buyChipsNum}c
            </p>
          </TakenMarker>
        )}
        {!players || !players[4] ? (
          <OpenMarker style={{ left: "70%", top: "12%" }}>Open</OpenMarker>
        ) : (
          <TakenMarker style={{ left: "70%", top: "12%" }}>
            <p className="mb-0">
              <b>{players[4].playerName}</b>
              <br />
              {players[4].buyChipsNum}c
            </p>
          </TakenMarker>
        )}
        {!players || !players[5] ? (
          <OpenMarker style={{ left: "89%", top: "25%" }}>Open</OpenMarker>
        ) : (
          <TakenMarker style={{ left: "89%", top: "25%" }}>
            <p className="mb-0">
              <b>{players[5].playerName}</b>
              <br />
              {players[5].buyChipsNum}c
            </p>
          </TakenMarker>
        )}
        {!players || !players[6] ? (
          <OpenMarker style={{ left: "89%", top: "58%" }}>Open</OpenMarker>
        ) : (
          <TakenMarker style={{ left: "89%", top: "58%" }}>
            <p className="mb-0">
              <b>{players[6].playerName}</b>
              <br />
              {players[6].buyChipsNum}c
            </p>
          </TakenMarker>
        )}
        {!players || !players[7] ? (
          <OpenMarker style={{ left: "70%", top: "75%" }}>Open</OpenMarker>
        ) : (
          <TakenMarker style={{ left: "70%", top: "75%" }}>
            <p className="mb-0">
              <b>{players[7].playerName}</b>
              <br />
              {players[7].buyChipsNum}c
            </p>
          </TakenMarker>
        )}
      </Container>
      <BuyInContainer>
        <BuyInInput type="number" placeholder="$10.00" />
        <BuyInButton>Buy In</BuyInButton>
      </BuyInContainer>
    </>
  );
}

export default Home;
