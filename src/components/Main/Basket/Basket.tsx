import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../../redux/action";
import {
  BasketImg,
  BasketContainer,
  BasketDisclosure,
  BasketName,
  BasketPrice,
  RemoveButton,
} from "./style";
import { ItemType } from "../../../types";

const Basket: React.FC<ItemType> = ({ food }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(food.id));
  };

  return (
    <>
      <div>
        <BasketImg src={food.image} alt="" />
      </div>
      <BasketContainer>
        <BasketName>{food.name}</BasketName>
        <BasketDisclosure>{food.disclosure}</BasketDisclosure>
        <BasketPrice>${food.price.toFixed(2)}</BasketPrice>
        <RemoveButton onClick={handleRemove}>Remove</RemoveButton>
      </BasketContainer>
    </>
  );
};

export default Basket;
