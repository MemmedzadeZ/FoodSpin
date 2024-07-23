import React from "react";
import { OrderNowButton } from "./style";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../../redux/basketSlider";
import { ItemType } from "../../../types";

const OrderNow: React.FC<ItemType> = ({ food }) => {
  const dispatch = useDispatch();
  const handleOrder = () => {
    dispatch(addToBasket(food));
  };
  return (
    <OrderNowButton style={{ fontSize: "20px" }} onClick={handleOrder}>
      Order Now
    </OrderNowButton>
  );
};

export default OrderNow;
