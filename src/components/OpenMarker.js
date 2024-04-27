import { styled } from "styled-components";

export const OpenMarker = styled.div`
  position: absolute;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background: rgb(222, 222, 222);
  color: rgb(154, 154, 154);
  border: 2px dashed rgb(255, 255, 255);
  width: 70px;
  height: 40px;
  border-radius: 20px;
  margin-top: 40px;
  transform: translate(-50%, -50%);
`;

export const TakenMarker = styled.div`
  position: absolute;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background: #003a62;
  color: white;
  border: 2px solid rgb(255, 255, 255);
  min-width: 80px;
  height: auto;
  border-radius: 5px;
  padding: 10px 0;
  margin-top: 40px;
  text-align: left;
  transform: translate(-50%, -50%);
`;
