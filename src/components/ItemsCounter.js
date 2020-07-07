import React, { useState } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  background: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.shadow};
`;
const StyledButton = styled.button`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin: 0 auto;
  border: none;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const ItemsCounter = () => {
  const [counter, ChangeCounter] = useState(0);

  return (
    <StyledWrapper>
      <StyledButton name="minus" onClick={() => ChangeCounter(counter - 1)}>
        {" "}
        -
      </StyledButton>
      <StyledButton>{counter}</StyledButton>
      <StyledButton onClick={() => ChangeCounter(counter + 1)}>+</StyledButton>
    </StyledWrapper>
  );
};

export default ItemsCounter;

//smake this counter grow when adding items to list
