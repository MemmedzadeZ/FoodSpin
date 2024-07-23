import React, { useState } from "react";
import Header from "../Header/Header";
import CircleWrapper_ from "../Main/CircleWrapper/CircleWrapper";
import { NavigationDiv } from "../Header/style";
import { changeCategory, changeColor } from "../../redux/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../Main/Basket/Basket";
// import ProductList from "../Main/ProductList/ProductList";
const TotalComponents = () => {
  const dispatch = useDispatch();
  const themeColor = useSelector((state) => state.theme.color);
  const selectedCategory = useSelector((state) => state.theme.selectedCategory);

  const handleCategoryChange = (category) => {
    dispatch(changeCategory(category));
  };
  return (
    <div>
      <Header handleCategoryChange={handleCategoryChange} />

      {/* <Cart /> */}
      <CircleWrapper_ selectedCategory={selectedCategory} />
    </div>
  );
};

export default TotalComponents;
