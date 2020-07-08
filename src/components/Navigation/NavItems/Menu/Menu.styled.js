import styled from "styled-components";
import flexUnit from "../../../../theme/Mixins";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: white;
  height: 100vh;
  width: 100vw;
  text-align: left;
  position: absolute;
  top: 100px;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  a {
    ${flexUnit(5, 12, 20, "vw", "font-size")};
    ${flexUnit(3, 12, 25, "vw", "padding")};
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: ${({ theme }) => theme.primaryYellow};
    }
  }
`;
