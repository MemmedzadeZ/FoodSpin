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
export const LogCard = styled.form`
  margin-top: 100px;
  h2 {
    color: #ff922c;
    margin-left: 350px;
    &:hover {
      color: #54bf29;
      border: 1px solid transparent;
    }
  }
`;

export const AccountDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2vh;
`;

export const AccountLable = styled.label``;

export const AccountBtn = styled.button`
  width: 163px;
  height: 48px;
  border-radius: 70px;
  background-color: #ff922c;
  color: white;

  margin-left: 320px;

  &:hover {
    background-color: #54bf29;
    border: 1px solid transparent;
  }
`;

export const LogOutDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1vh;
  cursor: pointer;
  margin-left: 360px;
`;

export const LogOutp = styled.p`
  color: red;
`;

export const ImgDiv = styled.div``;

export const LogOutImg = styled.img`
  width: 3vh;
`;
