import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import {
  Login1,
  LogCard,
  InputEmail,
  InputPass,
  Inputs,
  SignInput,
  SignButton,
} from "./style";
import { RootState } from "../../../redux/store";
import { NavigationDiv } from "../../Header/style";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userInfo = useSelector((state: RootState) => state.user.userInfo);

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === userInfo.login && password === userInfo.password) {
      navigate("/home", { replace: true });
    } else {
      alert("Data is not true :(");
    }
  };

  return (
    <Login1>
      <NavigationDiv />
      <LogCard onSubmit={handleSubmit} id="logcard">
        <h2>FoodSpin</h2>

        <Inputs>
          <SignInput>
            <InputEmail
              type="text"
              required
              value={username}
              onChange={handleUsernameChange}
            />
            <span>Username</span>
          </SignInput>
          <SignInput>
            <InputPass
              type="password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
            <span>Password</span>
          </SignInput>
        </Inputs>
        <SignButton type="submit">LOG IN</SignButton>
      </LogCard>
    </Login1>
  );
};

export default Login;
