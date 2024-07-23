import React from "react";
import styled from "styled-components";
import LogoImg from "./../../foodImages/logo/logo.png";
import Basket from "../../assets/images/Frame 1.png";
import {
  Container,
  ContLogo,
  FullDiv,
  Logo,
  NavigationDiv,
  StyledLink,
  Img,
  Img1,
} from "./style";
import { NavLink } from "react-router-dom";
import Foother from "../Foother/Foother";

import Gotopage from "../../assets/images/goto.png";

interface HeaderProps {
  handleCategoryChange: (category: string) => void;
}

const Header: React.FC<HeaderProps> = ({ handleCategoryChange }) => {
  return (
    <Container>
      <NavigationDiv />

      <FullDiv>
        <ContLogo>
          <Logo src={LogoImg} alt="Logo Image" />
        </ContLogo>
        <StyledLink
          href="#"
          onClick={() => handleCategoryChange("BreakfastFood")}
        >
          Breakfast
        </StyledLink>
        <StyledLink href="#" onClick={() => handleCategoryChange("LunchFood")}>
          Lunch
        </StyledLink>
        <StyledLink href="#" onClick={() => handleCategoryChange("DinnerFood")}>
          Dinner
        </StyledLink>

        <NavLink to="/basket">
          <Img src={Basket} alt="Basket" />
        </NavLink>
        {/* <NavLink to="/account">
          <Img
            src={Account}
            alt="Account"
            style={{ width: "25px", marginLeft: "-10px" ,""}}
          />
        </NavLink> */}

        <NavLink to="/account">
          <div>
            {" "}
            <Img
              src={Gotopage}
              alt="goto"
              style={{ width: "25px", marginLeft: "-10px", marginTop: "-3px" }}
            />
          </div>
        </NavLink>
      </FullDiv>
    </Container>
  );
};

export default Header;
