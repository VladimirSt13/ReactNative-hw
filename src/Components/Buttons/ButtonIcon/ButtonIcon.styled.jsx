import { Pressable } from "react-native";
import styled from "styled-components";

export const ButtonIconStyled = styled(Pressable)`
  ${(props) => props.mr && `margin-right:${props.mr}px`};
  ${(props) => props.ml && `margin-left:${props.ml}px`};
  ${(props) => props.w && `width:${props.size}px`};
  ${(props) => props.h && `height:${props.size}px`};
`;
