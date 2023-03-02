import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Post } from "../../../components";
import avatar from "../../img/Home/avatar.jpg";

const publications = require("../../../publications.json");

export const Posts = ({ navigation }) => {
  const [posts, setPosts] = useState(publications);

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image source={avatar} style={styles.userAvatar} />
        <View>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        renderItem={({ item }) => {
          return <Post item={item} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    flexShrink: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#BDBDBD",
    marginRight: 8,
  },
  userStyle: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    color: "#212121",
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    color: "rgba(33, 33, 33, 0.8)",
  },
});
