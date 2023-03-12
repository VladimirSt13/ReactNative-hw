import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
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

export const Post = ({ item }) => {
  const { id, img, postName, comments, location } = item;

  const navigation = useNavigation();

  const goToMap = () => {
    navigation.navigate("Map", { postName, location });
  };

  const goToComments = () => {
    navigation.navigate("Comments", { postImg: img, postId: id });
  };

  return (
    <PostContainer>
      <PostImage source={{ uri: img }} />

      <PostTitle>{postName}</PostTitle>

      <ActionsContainer>
        <PressableContainer onPress={goToComments}>
          <Ionicons
            name="chatbubble-outline"
            size={18}
            color="#BDBDBD"
            style={{ transform: [{ scaleX: -1 }] }}
          />
          <CommentsNumber>{comments}</CommentsNumber>
        </PressableContainer>

        <PressableContainer onPress={goToMap}>
          <LocationIcon width={18} height={18} />
          <Location>{`${location.region}, ${location.country}`}</Location>
        </PressableContainer>
      </ActionsContainer>
    </PostContainer>
  );
};
