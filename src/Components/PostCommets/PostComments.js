import { useState } from "react";
import {
  FlatList,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { PostImage } from "./PostCommets.styled";
import { PostComment } from "./PostComment";
import { FontAwesome } from "@expo/vector-icons";

const userId = "123";

export const PostComments = ({ ...props }) => {
  const [comment, setComment] = useState("");
  const handleSubmit = () => {
    console.log(comment);
    setComment("");
  };
  const { post } = props;
  const comments = post.commentsData;

  return (
    <>
      <PostImage source={{ uri: post.img }} />
      <FlatList
        data={comments}
        // keyboardDismissMode="on-drag"
        style={{ zIndex: 5 }}
        renderItem={({ item }) => {
          return (
            <PostComment
              isAuthor={post.authorPostId === item.authorId}
              comment={item}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Ваш коментар"
          style={styles.textInput}
          value={comment}
          onChangeText={setComment}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSubmit}>
          <FontAwesome name="send" size={24} color="#FF6C00" />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  textInput: {
    flex: 1,
    marginRight: 16,
    height: 40,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#cccc",
  },
});
