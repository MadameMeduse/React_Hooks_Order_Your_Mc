import React from "react";
import InProgress from "../components/InProgress";
import UserPageTemplate from "../template/UserPageTemplate";

const ModalView = props => {
  return (
    <UserPageTemplate>
      <InProgress />
    </UserPageTemplate>
  );
};

export default ModalView;
