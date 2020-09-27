import React from "react";
import { StyledWrapper } from "./InProgress.styled.js";
import Heading from "../../atoms/Heading/Heading";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Button from "../../atoms/Button/Button";
import { Link } from "react-router-dom";

const InProgress = () => {
  return (
    <StyledWrapper>
      <Heading>App in progress, stay tuned!</Heading>
      <Paragraph>
        There is much more under the surface, don't forget to inspect this React
        App.
      </Paragraph>
      <Button
        as={Link}
        to="/https://www.linkedin.com/in/monika-walig%C3%B3ra"
        target="_blank"
      >
        Contact me
      </Button>
    </StyledWrapper>
  );
};

export default InProgress;
