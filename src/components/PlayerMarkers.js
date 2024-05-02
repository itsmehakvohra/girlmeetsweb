import { OpenMarker, TakenMarker } from "./OpenMarker";

function PlayerMarkers(props) {
  return (
    <>
      {!props.players || !props.players[0] ? (
        <OpenMarker style={{ left: "30%", top: "75%" }}>Open</OpenMarker>
      ) : (
        <TakenMarker style={{ left: "30%", top: "75%" }}>
          <p className="mb-0">
            <b>{props.players[0].playerName}</b>
            <br />
            {props.players[0].buyChipsNum}c
          </p>
        </TakenMarker>
      )}
      {!props.players || !props.players[1] ? (
        <OpenMarker style={{ left: "12%", top: "58%" }}>Open</OpenMarker>
      ) : (
        <TakenMarker style={{ left: "12%", top: "58%" }}>
          <p className="mb-0">
            <b>{props.players[1].playerName}</b>
            <br />
            {props.players[1].buyChipsNum}c
          </p>
        </TakenMarker>
      )}
      {!props.players || !props.players[2] ? (
        <OpenMarker style={{ left: "12%", top: "25%" }}>Open</OpenMarker>
      ) : (
        <TakenMarker style={{ left: "12%", top: "25%" }}>
          <p className="mb-0">
            <b>{props.players[2].playerName}</b>
            <br />
            {props.players[2].buyChipsNum}c
          </p>
        </TakenMarker>
      )}
      {!props.players || !props.players[3] ? (
        <OpenMarker style={{ left: "30%", top: "12%" }}>Open</OpenMarker>
      ) : (
        <TakenMarker style={{ left: "30%", top: "12%" }}>
          <p className="mb-0">
            <b>{props.players[3].playerName}</b>
            <br />
            {props.players[3].buyChipsNum}c
          </p>
        </TakenMarker>
      )}
      {!props.players || !props.players[4] ? (
        <OpenMarker style={{ left: "70%", top: "12%" }}>Open</OpenMarker>
      ) : (
        <TakenMarker style={{ left: "70%", top: "12%" }}>
          <p className="mb-0">
            <b>{props.players[4].playerName}</b>
            <br />
            {props.players[4].buyChipsNum}c
          </p>
        </TakenMarker>
      )}
      {!props.players || !props.players[5] ? (
        <OpenMarker style={{ left: "89%", top: "25%" }}>Open</OpenMarker>
      ) : (
        <TakenMarker style={{ left: "89%", top: "25%" }}>
          <p className="mb-0">
            <b>{props.players[5].playerName}</b>
            <br />
            {props.players[5].buyChipsNum}c
          </p>
        </TakenMarker>
      )}
      {!props.players || !props.players[6] ? (
        <OpenMarker style={{ left: "89%", top: "58%" }}>Open</OpenMarker>
      ) : (
        <TakenMarker style={{ left: "89%", top: "58%" }}>
          <p className="mb-0">
            <b>{props.players[6].playerName}</b>
            <br />
            {props.players[6].buyChipsNum}c
          </p>
        </TakenMarker>
      )}
      {!props.players || !props.players[7] ? (
        <OpenMarker style={{ left: "70%", top: "75%" }}>Open</OpenMarker>
      ) : (
        <TakenMarker style={{ left: "70%", top: "75%" }}>
          <p className="mb-0">
            <b>{props.players[7].playerName}</b>
            <br />
            {props.players[7].buyChipsNum}c
          </p>
        </TakenMarker>
      )}
    </>
  );
}

export default PlayerMarkers;
