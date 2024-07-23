import React from "react";
import CorrectIcon from "../../../assets/images/correcticon.png";
import { Container, ElementWrapper } from "./style";

interface ConfirmedElementProps {
  message: string;
}

const Buy: React.FC<ConfirmedElementProps> = ({ message }) => (
  <Container>
    <ElementWrapper>
      <p>{message}</p>
    </ElementWrapper>
  </Container>
);
export default Buy;
