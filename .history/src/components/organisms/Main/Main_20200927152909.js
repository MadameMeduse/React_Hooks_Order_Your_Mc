import React from "react";
import Heading from "../../atoms/Heading/Heading";
import InProgress from "../../molecules/InProgress/InProgress";
import Slider from "../../molecules/Slider/Slider";

const Main = () => {
  return (
    <>
      <Heading>This is main</Heading>
      <Slider />
      <InProgress />
    </>
  );
};

export default Main;
