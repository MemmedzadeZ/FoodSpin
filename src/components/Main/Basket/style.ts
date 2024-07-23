import styled from "styled-components";

export const BasketImg = styled.img`
  width: 10vw;
  height: 5vh;
  border-radius: BasketContainer 30%;
`;

export const BasketContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BasketName = styled.p`
  font-size: 2vh;
  font-weight: 600;
`;

export const BasketPrice = styled.p`
  font-size: 1.5vh;
`;

export const BasketDisclosure = styled.p`
  font-size: 1.3vh;
  font-weight: 500;
`;

export const BasketItemContainer = styled.div`
  display: flex;
  gap: 4vh;
  overflow: hidden;
  align-items: center;
  border-bottom: 1px gray dotted;
`;

export const RemoveButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin-top: 10px;
`;
