import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";
import { PostImage } from "./PostCommets.styled";
import { PostComments } from "./PostComments";

const userId = "123";

export const PostComments = ({ ...props }) => {
  const { item, commentsData } = props;
  return (
    <>
      <PostImage source={{ uri: item.img }} />
      <FlatList
        data={commentsData}
        renderItem={({ comment }) => {
          return <PostComment comment={comment} />;
        }}
      />
    </>
  );
};
