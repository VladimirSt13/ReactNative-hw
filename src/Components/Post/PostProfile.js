import { useNavigation } from "@react-navigation/native";
// import CommentIcon from "../../img/icons/comment";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import LocationIcon from "../../img/icons/location";
import {
  ActionsContainer,
  CommentsNumber,
  Location,
  PostContainer,
  PostImage,
  PostTitle,
  PressableContainer,
} from "./Post.styled";

export const PostProfile = ({ item }) => {
  const { id, img, postName, comments, location } = item;

  const navigation = useNavigation();

  return (
    <PostContainer>
      <PostImage source={{ uri: img }} />

      <PostTitle>{postName}</PostTitle>

      <ActionsContainer>
        <View style={{ flexDirection: "row" }}>
          <PressableContainer>
            <Ionicons
              name="chatbubble"
              size={18}
              color="#FF6C00"
              style={{ transform: [{ scaleX: -1 }] }}
            />
            <CommentsNumber>{comments}</CommentsNumber>
          </PressableContainer>
          <PressableContainer style={{ marginLeft: 24 }}>
            <AntDesign name="like2" size={18} color="#FF6C00" />
            <CommentsNumber>153</CommentsNumber>
          </PressableContainer>
        </View>

        <PressableContainer>
          <LocationIcon width={18} height={18} color="#FF6C00" />
          <Location>{location.country}</Location>
        </PressableContainer>
      </ActionsContainer>
    </PostContainer>
  );
};
