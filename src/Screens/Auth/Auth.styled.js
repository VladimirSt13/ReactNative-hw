import styled from "styled-components";
import { View } from "react-native";

export const FormContaner = styled(View)`
  min-width: 375px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: #fff;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: ${(props) =>
    props.pt && !props.keyboardStatus ? props.pt : 16}px;
  padding-bottom: ${(props) =>
    props.pb && !props.keyboardStatus ? props.pb : 16}px;
`;

export const Form = styled(View)`
  align-items: center;
`;
