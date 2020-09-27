import React from "react";
import InProgress from "../components/InProgress";
import UserPageTemplate from "../template/UserPageTemplate";

const LoginView = props => {
  return (
    <UserPageTemplate>
      <InProgress />
    </UserPageTemplate>
  );
};

export default LoginView;
