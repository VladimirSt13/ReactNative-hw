import styled from "styled-components";
import { View, Pressable, Image } from "react-native";

export const Container = styled(View)`
  position: absolute;
  top: -66px;
  left: 50%;
  transform: translateX(-60px);
  width: 120px;
  height: 120px;
  background-color: #f6f6f6;
  border-radius: 16px;
`;

export const AddButton = styled(Pressable)`
  position: absolute;
  bottom: 14px;
  right: -12.5px;
`;

export const Icon = styled(Image)`
  width: 25px;
  height: 25px;
`;
