import React from "react";
import { useSelector } from "react-redux";
import Banner from "../components/home/Banner";
import Categories from "../components/home/Categories";
import Informations from "../components/home/Informations";
import TrendingProducts from "../components/home/TrendingProducts";
import Popup from "../components/home/Popup";
import LiveChat from "../components/home/LiveChat";

const HomePage = () => {
  const isOpen = useSelector((state) => state.popup.isOpen);
  const selectedProduct = useSelector((state) => state.popup.selectedProduct);
  return (
    <>
      {isOpen && <Popup {...selectedProduct} />}
      <Banner />
      <Categories />
      <TrendingProducts />
      <Informations />
      <LiveChat />
    </>
  );
};

export default HomePage;
