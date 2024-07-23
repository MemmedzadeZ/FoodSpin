import React from "react";
import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
  font-family: "Arial", sans-serif;
`;

export const ErrorContent = styled.div`
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const ErrorTitle = styled.h1`
  font-size: 6em;
  color: #e74c3c;
  margin: 0;
`;

export const ErrorMessage = styled.p`
  font-size: 1.2em;
  color: #333;
`;

export const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #3498db;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;
