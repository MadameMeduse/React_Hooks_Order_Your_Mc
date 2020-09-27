import React from "react";
import { connect } from "react-redux";
import UserPageTemplate from "../template/UserPageTemplate";

const MenuView = () => {
  return <UserPageTemplate></UserPageTemplate>;
};

const mapStateToProps = state => {
  const { orders } = state;
  return { orders };
};

//dodaje props orders do state (maja taka sama nazwe więc zostały zdestrukturyzowane)

export default connect(mapStateToProps)(MenuView);
