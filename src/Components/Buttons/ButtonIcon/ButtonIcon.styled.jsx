import { Pressable } from "react-native";
import styled from "styled-components";

export const ButtonIconStyled = styled(Pressable)`
  ${(props) => props.mt && `margin-top:${props.mt}px`};
  ${(props) => props.mr && `margin-right:${props.mr}px`};
  ${(props) => props.mb && `margin-right:${props.mb}px`};
  ${(props) => props.ml && `margin-left:${props.ml}px`};
  ${(props) => props.w && `width:${props.size}px`};
  ${(props) => props.h && `height:${props.size}px`};
  /* ${(props) => props.color && `fill:${props.color}`}; */
  /* background-color: #afafaf;
  color: #000;
  fill: #315ed8;
  stroke: #315ed8;*/
`;
