import { Image, Text, View, Pressable } from "react-native";
import styled from "styled-components";

export const PostContainer = styled(View)`
  margin-bottom: 16px;
`;
export const PostImage = styled(Image)`
  width: 100%;
  height: 240px;
  border-radius: 8px;
  margin-bottom: 8px;
`;
export const PostTitle = styled(Text)`
  margin-bottom: 8px;
  font-family: "Roboto-Medium";
  font-size: 16px;
  line-height: 19px;
  color: #212121;
`;
export const ActionsContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;
export const PressableContainer = styled(Pressable)`
  flex-direction: row;
`;
export const CommentsNumber = styled(Text)`
  margin-left: 8px;
  font-family: "Roboto-Regular";
  font-size: 16px;
  line-height: 19px;
  color: #bdbdbd;
`;
export const Location = styled(Text)`
  margin-left: 8px;
  font-family: "Roboto-Regular";
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: underline;
  color: #212121;
`;

/*
font-family: "Roboto-Regular";

  text-align: center;
  font-size: 16px;
  line-height: 16px;
  columns: #1b4371;
*/
