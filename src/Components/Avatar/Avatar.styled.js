import { Image, Pressable, View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  position: absolute;
  top: -66px;
  left: 50%;
  transform: translateX(-46px);
  width: 120px;
  height: 120px;
  background-color: #f6f6f6;
  border-radius: 16px;
`;
export const AvatarImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;

export const Button = styled(Pressable)`
  position: absolute;
  bottom: 14px;
  right: -12.5px;
`;
