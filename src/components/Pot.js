import styled from "styled-components";

export const PotMarkerContainer = styled.div`
  display: flex;
  position: absolute;
  width: auto;
  transform: translateY(-100%);
  top: 75px;
  justify-content: space-around;
`;

export const PotMarker = styled.div`
  text-align: left;
  padding-top: 15px;
  position: relative;
  width: 150px;
  height: 30px;
  font-size: 18px;
  background: rgb(80, 158, 188);
  display: flex;
  border-radius: 5px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  color: rgb(255, 255, 255);
  transition: all 300ms ease-in-out 0s;
  opacity: 1;
  z-index: -1;
  transform: rotateX(0deg);
`;
