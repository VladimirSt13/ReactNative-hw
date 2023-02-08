import { Pressable, Text } from "react-native";
import styled, { css } from "styled-components";

export const ButtonStyled = styled(Pressable)`
  justify-content: center;
  margin-bottom: 16px;
  align-items: center;
  height: 51px;
  border-radius: 100px;
  width: 100%;
  ${(props) =>
    props.type &&
    css`
      background-color: transparent;
      border-color: #ff6c00;
    `}
  ${(props) =>
    !props.type &&
    css`
      background-color: #ff6c00;
      border-color: transparent;
    `}
`;

export const TextStyled = styled(Text)`
  /* font-family: "Roboto-Regular"; */
  font-size: 16px;
  color: ${(props) => (props.type ? "#FF6C00" : "#FFFFFF")};
`;
