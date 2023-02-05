import styled from "styled-components";
import { TextInput, View } from "react-native";

export const InputWrapper = styled(View)`
  width: 100%;
`;

export const InputStyled = styled(TextInput)`
  padding-left: 16px;
  padding-right: 16px;
  height: 40px;
  background-color: #f6f6f6;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 16px;
`;
