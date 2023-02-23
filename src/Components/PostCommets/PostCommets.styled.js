import { Image, Text, View, Pressable } from "react-native";
import styled, { css } from "styled-components";

export const PostContainer = styled(View)`
  margin-bottom: 16px;
`;

export const PostImage = styled(Image)`
  width: 100%;
  height: 240px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const CommentTextContainer = styled(View)`
  flex-grow: 1;
  padding: 8px;

  background: rgba(0, 0, 0, 0.03);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;

  ${(p) =>
    p.isAuthor
      ? css`
          border-top-left-radius: 6px;
          margin-right: 16px;
        `
      : css`
          border-top-right-radius: 6px;
          margin-left: 16px;
        `}
`;

export const CommentText = styled(Text)`
  margin-bottom: 8px;
  font-family: "Roboto-Regular";
  font-size: 13px;
  line-height: 18px;
  color: #212121;
`;

export const CommentDate = styled(Text)`
  font-family: "Roboto-Regular";
  font-size: 10px;
  line-height: 12px;

  color: #bdbdbd;

  align-self: ${(p) => (p.isAuthor ? "flex-end" : "flex-start")};
`;
