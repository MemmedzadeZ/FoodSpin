import styled from "styled-components";

export const Container = styled.div`
  margin-top: -20px;
  margin-left: -250px;
  display: flex;
  align-items: center;
`;

export const ContLogo = styled.div`
  position: absolute;
  margin-left: -450px;
  margin-top: -290px;
`;

export const FullDiv = styled.div`
  /* margin-left: 50vh; */
  /* margin-top: 100px; */
  display: flex;
  z-index: 10px;
  padding: top;
  gap: 30px;
  margin-left: 750px;
  margin-top: 50px;
  color: #333333;

  position: relative;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  font-weight: bold;
  /* padding: 10px 20px; */
  /* margin: 0px 10px; */
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #dbf4d1;
  }

  &:active {
    background-color: #dbf4d1;
  }
`;

export const Logo = styled.img`
  position: absolute;
  margin-top: 40vh;
  // margin-top: 30px;
`;
export const BreacfastParagrf = styled.div`
  color: red;
`;

export const NavigationDiv = styled.div`
  background-color: #ffeede;
  position: absolute;
  width: 1100px;
  height: 1100px;
  border-radius: 50%;
  top: -85vh;
  left: 320px;

  &:hover {
    background-color: #dbf4d1;
  }
`;

export const Img = styled.img`
  margin-left: 400px;
  z-index: 10px;
`;
export const Img1 = styled.img`
  z-index: 10px;
`;
