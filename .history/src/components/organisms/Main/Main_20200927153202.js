import React from "react";
import Heading from "../../atoms/Heading/Heading";
import InProgress from "../../molecules/InProgress/InProgress";
import Slider from "../../molecules/Slider/Slider";
import { StyledMain } from "./Main.styled";

const Main = () => {
  return (
    <StyledMain>
      <Heading>This is main</Heading>
      <Slider />
      <InProgress />
    </StyledMain>
  );
};

export default Main;
