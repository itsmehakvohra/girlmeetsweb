import styled from "styled-components";

export const BuyInContainer = styled.div`
  position: absolute;
  z-index: 2;
  right: 300px;
  bottom: 60px;
  display: flex;
  flex-direction: column;
`;

export const BuyInButton = styled.button`
  transition: background 0.3s ease 0s;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  white-space: nowrap;
  border: 1px solid rgb(222, 222, 222);
  color: rgb(255, 255, 255);
  height: 60px;
  width: 200px;
  padding: 0px 15px;
  top: 0px;
  font-weight: 400;
  font-size: 15px;
  border-radius: 5px;
  position: absolute;
  background: #003a62;
  box-shadow: 11px 14px 16px 0px rgba(166, 166, 166, 0.64);
  z-index: 1;
  left: 120px;
`;

export const BuyInInput = styled.input`
  font-family: Rambla, sans-serif;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 16px;
  color: rgb(51, 51, 51);
  border: 1px solid rgb(222, 222, 222);
  background: rgb(255, 255, 255);
  width: 100px;
  height: 60px;
  font-weight: bold;
  text-align: center;
  margin-right: 5px;
`;
