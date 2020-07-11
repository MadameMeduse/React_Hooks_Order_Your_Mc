import styled from "styled-components";

export const Item = styled.div`
  width: 100vw;
  height: auto;
  flex-direction: column;

  hr {
    display: none;
  }

  &:focus {
    outline: -webkit-focus-ring-color auto 0.1px;
  }
`;

export const SlideTitle = styled.h2`
  margin-left: 5vw;
  font-size: 25px;
`;

export const SlideImage = styled.img`
  width: 100vw;
  height: 500px;
  background-image: url(${({ sliderImage }) => sliderImage});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
  border: none;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 10.7vw;
  padding-right: 3.9vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 2;
  background: ${({ theme }) => theme.primaryYellow};
`;

export const StyledButton = styled.button`
  width: 3.9vw;
  height: 3.9vw;
  border: none;
  background: transparent;
  background-image: url(${({ icon }) => icon});
  background-size: 50%;
  background-position: 50% 50%;
  background-repeat: no-repeat;

  &:focus {
    outline: -webkit-focus-ring-color auto 0.1px;
  }
`;
