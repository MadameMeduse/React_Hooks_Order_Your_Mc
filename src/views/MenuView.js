import React from "react";
import { connect } from "react-redux";
import UserPageTemplate from "../template/UserPageTemplate";
import InProgress from "../components/InProgress";

const MenuView = props => {
  return (
    <UserPageTemplate>
      <InProgress />
      {console.log({ props })}
    </UserPageTemplate>
  );
};

const mapStateToProps = state => {
  const { orders } = state;
  return { orders };
};

//dodaje props orders do state (maja taka sama nazwe więc zostały zdestrukturyzowane)

export default connect(mapStateToProps)(MenuView);
