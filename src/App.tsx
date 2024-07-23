import { useState } from "react";

import TotalComponents from "./components/TotalComp/TotalComponents";
import { Route, Router, Routes } from "react-router-dom";
import LogIn from "./components/Main/LogIn/Login";
import UserList from "./components/TotalComp/TotalComponents";
import OrderPage from "./components/Main/Basket/Basket";
import BasketPage from "./components/Main/OrderBasketPage/BasketPage";
import Buy from "./components/Main/BuyFolder/Buy";
import Account from "./components/Main/Account/Account";
import Error1 from "./components/Error/Error";
function App() {
  return (
    <>
      {" "}
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/home" element={<TotalComponents />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/buy" element={<Buy message={"The element is buy"} />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<Error1 />} />
      </Routes>
      {/* <Routes>
        <Route path="/buy" element={<Buy />} />
      </Routes> */}
      {/* <UserList /> */}
    </>
  );
}

export default App;
