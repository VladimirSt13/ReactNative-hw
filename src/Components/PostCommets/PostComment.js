import { View, Text, StyleSheet, Image } from "react-native";

export const PostComment = ({
  userAvatar,
  username,
  commentText,
  commentDate,
  isAuthor,
}) => {
  return (
    <View style={styles.container}>
      {isAuthor ? (
        <View style={styles.rightAvatar}>
          <Text style={styles.authorUsername}>{username}</Text>
          <Image
            source={
              userAvatar ? { uri: userAvatar } : require("./default_avatar.png")
            }
            style={styles.avatar}
          />
        </View>
      ) : (
        <View style={styles.leftAvatar}>
          <Image
            source={
              userAvatar ? { uri: userAvatar } : require("./default_avatar.png")
            }
            style={styles.avatar}
          />
          <Text style={styles.otherUsername}>{username}</Text>
        </View>
      )}

      <View style={styles.commentDetails}>
        <Text style={styles.commentText}>{commentText}</Text>
        <Text style={styles.commentDate}>{commentDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  leftAvatar: {
    flexDirection: "row",
    marginRight: 8,
  },
  rightAvatar: {
    flexDirection: "row-reverse",
    marginLeft: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  authorUsername: {
    color: "#333",
    fontWeight: "bold",
    marginRight: 4,
  },
  otherUsername: {
    color: "#333",
    fontWeight: "bold",
    marginLeft: 4,
  },
  commentDetails: {
    flex: 1,
  },
  commentText: {
    fontSize: 16,
    marginBottom: 4,
  },
  commentDate: {
    fontSize: 12,
    color: "#999",
  },
});
