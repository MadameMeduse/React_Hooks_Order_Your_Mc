import React from "react";
import ShopingList from "../components/ShopingList";
import Navigation from "../components/Navigation/Navigation";

const ModalView = props => {
  return (
    <div>
      <Navigation />
      <ShopingList />
    </div>
  );
};

export default ModalView;
