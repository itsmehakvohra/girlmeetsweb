import { Modal } from "react-bootstrap";

function ModalIntro(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      backdrop="static"
      keyboard={"false"}
      style={{ top: "30%" }}
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.body}</Modal.Body>
      <Modal.Footer>{props.footer}</Modal.Footer>
    </Modal>
  );
}

export default ModalIntro;
