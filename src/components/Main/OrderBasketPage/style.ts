import styled from "styled-components";

export const BasketContainer = styled.div`
  position: absolute;
  border: 1px gray solid;
  width: 60vw;
  height: 30vw;
  left: 50%;
  top: 50%;
  padding: 3vh 4vh;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  transform: translate(-50%, -50%);
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 10%;
`;

export const BuyButton = styled.button`
  width: 163px;
  height: 48px;
  border-radius: 70px;
  background-color: #ff922c;
  color: white;
  position: absolute;

  &:hover {
    background-color: #54bf29;
    border: 1px solid transparent;
  }
`;
