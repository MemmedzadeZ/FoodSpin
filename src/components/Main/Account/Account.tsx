import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  AccountBtn,
  AccountDiv,
  AccountLable,
  BasketContainer,
  ImgDiv,
  LogCard,
  LogOutDiv,
  LogOutImg,
  LogOutp,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { User } from "../../../types";
import { editUser } from "../../../redux/userSlider";
import { InputEmail, InputPass, Inputs, SignInput } from "../LogIn/style";
import LogOut from "../../../assets/images/goto.png";
import { NavigationDiv } from "../../Header/style";
const Account = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const useInfo = useSelector((state: RootState) => state.user.userInfo);
  const navigate = useNavigate();

  useEffect(() => {
    setUsername(useInfo.login);
    setPassword(useInfo.password);
  }, [setUsername, setPassword, useInfo]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username !== "" && password !== "") {
      let user: User = { login: username, password: password };
      user.login = username;
      dispatch(editUser(user));
    } else {
      alert("EMPTY");
    }
  };

  const handleUsernameInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogOut = () => {
    navigate("/");
  };

  return (
    <div>
      <NavigationDiv />
      <NavLink to="/home" style={{ textDecoration: "none" }}>
        <h2>Back</h2>
      </NavLink>

      <BasketContainer>
        <LogCard onSubmit={handleSubmit}>
          <h2>FoodSpin</h2>

          <Inputs>
            <SignInput>
              <InputEmail
                type="text"
                required
                value={username}
                onChange={handleUsernameInput}
              />
              <span>Username</span>
            </SignInput>
            <SignInput>
              <InputPass
                type="password"
                required
                value={password}
                onChange={handlePasswordInput}
              />
              <span>Password</span>
            </SignInput>
          </Inputs>
          <AccountBtn>Edit</AccountBtn>
          <LogOutDiv onClick={handleLogOut}>
            <LogOutp>Log Out</LogOutp>
            <ImgDiv>
              <LogOutImg src={LogOut} alt="" />
            </ImgDiv>
          </LogOutDiv>
        </LogCard>
      </BasketContainer>
    </div>
  );
};

export default Account;
