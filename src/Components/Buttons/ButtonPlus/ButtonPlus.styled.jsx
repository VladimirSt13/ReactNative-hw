import { Pressable, Text } from "react-native";
import styled, { css } from "styled-components";

export const ButtonPlusStyled = styled(Pressable)`
  justify-content: center;
  align-items: center;
  margin-left: 32px;
  margin-right: 32px;
  height: 40px;
  border-radius: 20px;
  width: 70px;
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
