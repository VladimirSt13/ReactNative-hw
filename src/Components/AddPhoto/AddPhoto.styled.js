import { Camera } from "expo-camera";
import { Image, Pressable, Text as TextRN, View } from "react-native";
import styled from "styled-components";

export const PhotoContainer = styled(View)`
  margin-bottom: 8px;
  width: 100%;
  height: 240px;
  border-radius: 8px;
  background: #f6f6f6;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  overflow: hidden;
`;

export const CameraStyled = styled(Camera)`
  height: 100%;
  width: 100%;
`;

export const Photo = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const MakePhoto = styled(Pressable)`
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  left: 50%;
  top: 50%;
  transform: translate(-30px, -30px);
  background: rgba(255, 255, 255, 0.3);
  z-index: 5;
`;
export const Text = styled(TextRN)`
  margin-bottom: 16px;
  font-family: "Roboto-Regular";
  font-size: 16px;
  line-height: 19px;
  color: #bdbdbd;
`;
