import React from "react";
import InProgress from "../components/InProgress";
import UserPageTemplate from "../template/UserPageTemplate";
import Slider from "../components/molecules/Slider/Slider";
import Button from "../components/atoms/Button/Button";

const CartView = () => {
  return (
    <UserPageTemplate>
      <>
        <Slider />
        <Button>Sprawdz</Button>
        <InProgress />
      </>
    </UserPageTemplate>
  );
};

export default CartView;
