import { useNavigation, useRoute } from "@react-navigation/native";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import CommentIcon from "../../img/icons/comment";
import LocationIcon from "../../img/icons/location";

import { Map } from "../../Screens/main/Map";
import { Comments } from "../../Screens/main/Comments";

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
  const { id, img, postName, comments, location } = item;

  const navigation = useNavigation();

  const goToMap = () => {
    navigation.navigate("Map", { location });
  };

  const gotToComments = () => {
    navigation.navigate("Comments", { img, id });
  };

  return (
    <PostContainer>
      <PostImage source={{ uri: img }} />

      <PostTitle>{postName}</PostTitle>

      <ActionsContainer>
        <PressableContainer onPress={gotToComments}>
          <CommentIcon width={18} height={18} />
          <CommentsNumber>{comments}</CommentsNumber>
        </PressableContainer>

        <PressableContainer onPress={goToMap}>
          <LocationIcon width={18} height={18} />
          <Location>{location}</Location>
        </PressableContainer>
      </ActionsContainer>
    </PostContainer>
  );
};
