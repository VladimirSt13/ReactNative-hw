import styled from "styled-components";
import { View, Text } from "react-native";

export const ProfileContainer = styled(View)`
  min-width: 375px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: #fff;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: ${(props) => (props.pt ? props.pt : 0)}px;
  padding-bottom: ${(props) => (props.pb ? props.pb : 8)}px;
`;
export const UserName = styled(Text)`
  font-family: "Roboto-Medium";
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  color: #212121;
`;
