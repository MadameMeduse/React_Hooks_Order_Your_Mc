import styled from "styled-components";

const ButtonIcon = styled.button`
  width: 13px;
  height: 13px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border: none;
  margin-left: 25px;
`;

export default ButtonIcon;
