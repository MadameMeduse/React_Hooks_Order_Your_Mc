import React from "react";
import InProgress from "../components/InProgress";
import UserPageTemplate from "../template/UserPageTemplate";

const AboutView = () => {
  return (
    <UserPageTemplate>
      <InProgress />
    </UserPageTemplate>
  );
};

export default AboutView;
