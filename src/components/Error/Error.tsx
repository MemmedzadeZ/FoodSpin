import React from "react";
import {
  BackButton,
  ErrorContainer,
  ErrorContent,
  ErrorMessage,
  ErrorTitle,
} from "./style";
import { NavLink } from "react-router-dom";

// const goBack = () => {
//   window.history.back();
// };
const Error: React.FC = () => {
  return (
    <ErrorContainer>
      <ErrorContent>
        <ErrorTitle>404</ErrorTitle>
        <ErrorMessage>
          Oops! The page you are looking for does not exist.
        </ErrorMessage>
        <NavLink to="/">
          <BackButton>Go Back</BackButton>
        </NavLink>
      </ErrorContent>
    </ErrorContainer>
  );
};

export default Error;
