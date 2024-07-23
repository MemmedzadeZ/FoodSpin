import React from "react";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { BasketContainer, BuyButton } from "./style";
import Basket from "../Basket/Basket";
import { NavigationDiv } from "../../Header/style";
import { NavLink } from "react-router-dom";

const BasketPage = () => {
  const basketItems = useSelector((state: RootState) => state.card.basketItems);

  return (
    <div>
      <div>
        <NavLink to="/home">Back</NavLink>
        <NavigationDiv />
      </div>
      <BasketContainer>
        {basketItems.length === 0 ? (
          <>
            <h2 style={{ color: "red", margin: "170px", marginLeft: "200px" }}>
              YOUR CARD IS EMPTY!
            </h2>
            <BuyButton disabled>BUY</BuyButton>
          </>
        ) : (
          <>
            {basketItems.map((food) => (
              <Basket food={food} key={Number(food.id)} />
            ))}
            <NavLink to="/buy">
              <BuyButton>BUY</BuyButton>
            </NavLink>
          </>
        )}
      </BasketContainer>
    </div>
  );
};

export default BasketPage;
