import React from "react";
import styled from "styled-components";
import flexUnit from "../theme/Mixins";

const StyledInProgress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledHeading = styled.h2`
  ${flexUnit(5, 32, 60, "vw", "font-size")};
  text-align: center;
`;
const StyledParagraph = styled.p`
  ${flexUnit(3, 22, 50, "vw", "font-size")};
  padding: 0 10vw;
  text-align: center;
`;

const InProgress = () => {
  return (
    <StyledInProgress>
      <StyledHeading>App in progress, stay tuned!</StyledHeading>
      <StyledParagraph>
        Soon you will be able to order your favourite happyMeal by this React
        aplication.
      </StyledParagraph>
    </StyledInProgress>
  );
};

export default InProgress;
