import { Pressable, Text } from "react-native";
import styled, { css } from "styled-components";

export const ButtonRoundStyled = styled(Pressable)`
  ${(props) => props.mt && `margin-top:${props.mt}px`};
  ${(props) =>
    (props.mr && props.mr === "auto" && `margin-right:auto`) ||
    `margin-right:${props.mr}px`};
  ${(props) => props.mb && `margin-bottom:${props.mb}px`};
  ${(props) =>
    (props.ml && props.ml === "auto" && `margin-left:auto`) ||
    `margin-left:${props.ml}px`}

  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 20px;
  width: 70px;
  ${(props) =>
    props.type &&
    css`
      background-color: transparent;
      border-color: ${(props) => props.color};
    `}
  ${(props) =>
    !props.type &&
    css`
      background-color: ${(props) => props.color};
      border-color: transparent;
    `}
`;
