import React from "react";
import InProgress from "../components/molecules/Main/InProgress";
import UserPageTemplate from "../template/UserPageTemplate";
import Slider from "../components/molecules/Slider/Slider";
import Button from "../components/atoms/Button/Button";

const HomeView = () => {
  return (
    <UserPageTemplate>
      <>
        <Slider />
        <InProgress />
      </>
    </UserPageTemplate>
  );
};

export default HomeView;
