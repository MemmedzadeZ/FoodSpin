import styled from "styled-components";

export const Login1 = styled.div`
  width: 1280px;
  max-height: 790px;
  background-color: white;
  padding: 0;
  gap: 0;
  overflow: hidden;
  margin-top: 150px;
`;

export const LogCard = styled.form`
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
  h2 {
    margin-left: 350px;
    margin-top: 100px;
    color: #ff922c;
    &:hover {
      color: #54bf29;
      border: 1px solid transparent;
    }
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const InputPass = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;
  color: #000000;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: 1em;
  &:valid ~ span {
    color: rgb(47, 49, 49);
    transform: translateX(10px) translateY(-7px);
    font-size: 0.65em;
    padding: 0 10px;
    background-color: white;
    border-left: 1px solid rgb(47, 49, 49);
    border-right: 1px solid rgb(47, 49, 49);
  }
`;

export const InputEmail = styled(InputPass)``;

export const SignInput = styled.div`
  position: relative;
  width: 250px;
  margin: 0 auto;

  span {
    position: absolute;
    left: 0;
    padding: 10px;
    pointer-events: none;
    font-size: 1em;
    color: rgb(47, 49, 49);
    transition: 0.5s;
  }
`;
export const SignButton = styled.button`
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
