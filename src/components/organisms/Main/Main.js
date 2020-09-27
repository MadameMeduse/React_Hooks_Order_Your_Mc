import React from "react";
import InProgress from "../../molecules/InProgress/InProgress";
import Slider from "../../molecules/Slider/Slider";
import { StyledMain } from "./Main.styled";

const Main = () => {
  return (
    <StyledMain>
      <Slider />
      <InProgress />
    </StyledMain>
  );
};

export default Main;
