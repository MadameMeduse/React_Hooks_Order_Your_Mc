import React from "react";
import InProgress from "../components/InProgress";
import UserPageTemplate from "../template/UserPageTemplate";
import Slider from "../components/molecules/Slider/Slider";
import Button from "../components/atoms/Button/Button";

const HomeView = () => {
  return (
    <UserPageTemplate>
      <>
        <Slider />
        <Button>Sprawdź</Button>
        <InProgress />
      </>
    </UserPageTemplate>
  );
};

export default HomeView;
