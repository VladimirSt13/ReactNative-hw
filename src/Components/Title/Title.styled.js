import { Text } from "react-native";
import styled from "styled-components";

export const TitleStyled = styled(Text)`
  font-family: "Roboto-Medium";
  text-align: center;
  font-size: 30px;
  line-height: 35px;
  margin-bottom: ${(props) => (props.keyboardStatus ? 15 : 32)}px;
`;
