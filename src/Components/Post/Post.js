import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import CommentIcon from "../../img/icons/comment";
import LocationIcon from "../../img/icons/location";
import {
  PostContainer,
  PostImage,
  PostTitle,
  ActionsContainer,
  PressableContainer,
  CommentsNumber,
  Location,
} from "./Post.styled";

export const Post = ({ item }) => {
  return (
    <PostContainer>
      <Pressable onPress={() => navigation.navigate("Publication")}>
        <PostImage source={{ uri: item.img }} />
      </Pressable>

      <PostTitle>{item.postName}</PostTitle>

      <ActionsContainer>
        <PressableContainer>
          <CommentIcon width={18} height={18} />
          <CommentsNumber>{item.comments}</CommentsNumber>
        </PressableContainer>

        <PressableContainer>
          <LocationIcon width={18} height={18} />
          <Location>{item.location}</Location>
        </PressableContainer>
      </ActionsContainer>
    </PostContainer>
  );
};
