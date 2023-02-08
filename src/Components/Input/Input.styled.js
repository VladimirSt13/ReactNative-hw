import styled from "styled-components";
import { TextInput, View, Pressable, Text } from "react-native";

export const InputWrapper = styled(View)`
  width: 100%;
`;

export const InputStyled = styled(TextInput)`
  padding-left: 16px;
  padding-right: 16px;
  height: 50px;
  background-color: #f6f6f6;
  border: ${(props) =>
    props.focus ? "1px solid #FF6C00" : "1px solid #e8e8e8"};
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: ${(props) => (props.isPassword ? 42 : 16)}px;
`;

export const ShowPasswordBtn = styled(Pressable)`
  position: absolute;
  right: 16px;
  top: 12px;
`;

export const ShowPasswordBtnText = styled(Text)`
  font-family: "Roboto-Regular";
  font-size: 16px;
  color: #1b4371;
  text-align: right;
`;
