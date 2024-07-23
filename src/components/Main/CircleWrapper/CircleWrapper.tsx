import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../../redux/action";
import database from "../../../../db.json";
import {
  Button,
  Button1,
  CircleWrapper,
  Circle,
  ImageWrapper,
  CircleDiv,
  ImageBtn,
  TransparantDiv,
  TransparantDiv1,
  Img,
} from "./style";
import ImageArrow from "../../../assets/images/Rectangle 2.png";
import { CartItem, CircleWrapperProps } from "../../../types";

import OrderNow from "../OrderNow/OrderNow";
import { RootState } from "../../../redux/store";
import Foother from "../../Foother/Foother";

const CircleWrapper_: React.FC<CircleWrapperProps> = ({ selectedCategory }) => {
  const dispatch = useDispatch();
  const [rotation, setRotation] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRotate = (direction: number) => {
    setRotation((prevRotation) => prevRotation + direction);
    handleNextItem();
  };
  const selectedFood = useSelector(
    (state: RootState) => state.food.selectedFood
  );
  const items: CartItem[] = database[selectedCategory] || [];

  const handleNextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const currentItem: CartItem = items[currentIndex];

  return (
    <>
      <div>
        <div>
          <CircleWrapper rotation={rotation}>
            <Circle>
              {items.map((item, index) => (
                <ImageWrapper key={item.id} index={index} total={items.length}>
                  <img src={item.image} alt={item.name} />
                </ImageWrapper>
              ))}
            </Circle>
            <CircleDiv />
          </CircleWrapper>

          <div style={{ top: "150px" }}>
            <div style={{ marginTop: "-250px", fontSize: "25px" }}>
              <h2 style={{ color: "#FF922C" }}>${currentItem.price}</h2>
              <h3>{currentItem.name}</h3>
              <p>{currentItem.disclosure}</p>
              {selectedFood && <OrderNow food={selectedFood} />}

              <Foother />
            </div>
            <div
              style={{
                position: "relative",
                marginLeft: "750px",
                marginTop: "-400px",
                zIndex: 1,
              }}
            ></div>
            <img
              src={currentItem.image}
              alt={currentItem.name}
              style={{
                position: "absolute",
                borderRadius: "50%",
                marginLeft: "750px",
                marginTop: "150px",
                zIndex: 2,
              }}
            />
          </div>

          <Button onClick={() => handleRotate(-45)}>
            <ImageBtn src={ImageArrow} />
          </Button>
          <Button1 onClick={() => handleRotate(45)}>
            <ImageBtn src={ImageArrow} />
          </Button1>
          <TransparantDiv />
          <TransparantDiv1 />
        </div>
      </div>
    </>
  );
};

export default CircleWrapper_;
