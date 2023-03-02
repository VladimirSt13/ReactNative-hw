import React from "react";

import { Image, StyleSheet, View } from "react-native";
import {
  CommentDate,
  CommentText,
  CommentTextContainer,
} from "./PostComments.styled";

const defaultAvatar = require("../../img/default_avatar.png");
const authorAvatar = require("../../img/Home/avatar.jpg");

export const PostComment = ({ comment, isAuthor }) => {
  const { userAvatar } = comment;

  const renderAvatar = () => {
    let avatar = null;

    if (isAuthor) {
      avatar = authorAvatar;
    } else {
      avatar = userAvatar ? { uri: userAvatar } : defaultAvatar;
    }

    return <Image source={avatar} style={styles.avatar} />;
  };

  return (
    <View style={styles.commentContainer}>
      <View style={isAuthor ? styles.commentLeft : styles.commentRight}>
        {!isAuthor && renderAvatar()}
        <CommentTextContainer isAuthor={isAuthor}>
          <CommentText>{comment.commentText}</CommentText>
          <CommentDate isAuthor={isAuthor}>{comment.commentDate}</CommentDate>
        </CommentTextContainer>
        {isAuthor && renderAvatar()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    justifyContent: "space-between",
    // alignItems: "flex-start",
    marginVertical: 8,
    width: "90%",
  },
  commentLeft: {
    flexDirection: "row",
  },
  commentRight: {
    flexDirection: "row",
  },
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 25,
  },
  commentText: {
    flex: 1,
    paddingLeft: 8,
  },
  commentAuthor: {
    fontWeight: "bold",
  },
  commentContent: {
    paddingTop: 4,
    paddingBottom: 8,
  },
});
