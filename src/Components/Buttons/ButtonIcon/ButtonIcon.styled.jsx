import { Pressable, Text } from "react-native";
import styled, { css } from "styled-components";

export const ButtonIconStyled = styled(Pressable)`
  ${(props) => props.mr && `margin-right:${props.mr}px`};
  ${(props) => props.w && `width:${props.size}px`};
  ${(props) => props.h && `height:${props.size}px`};
`;
