import React from "react";
import InProgress from "../components/InProgress";
import UserPageTemplate from "../template/UserPageTemplate";

const CartView = () => {
  return (
    <UserPageTemplate>
      <InProgress />
    </UserPageTemplate>
  );
};

export default CartView;
