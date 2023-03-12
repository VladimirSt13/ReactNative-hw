import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Post } from "../../../Components";

import { collection, onSnapshot } from "firebase/firestore";

import { db } from "../../../../firebase/config";

import { useSelector } from "react-redux";
import { getUser } from "./../../../redux/auth/authSelectors";

const publications = [];

export const Posts = () => {
  const [posts, setPosts] = useState(publications);
  const user = useSelector(getUser);

  const getAllPosts = () => {
    try {
      const unsubscribe = onSnapshot(
        collection(db, "posts"),
        (querySnapshot) => {
          const posts = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setPosts(posts);
        }
      );
      return unsubscribe;
    } catch (error) {
      console.log(error.message);
      return () => {};
    }
  };

  useEffect(() => {
    const unsubscribe = getAllPosts();
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image source={{ uri: user.avatar }} style={styles.userAvatar} />
        <View>
          <Text style={styles.userName}>{user.login}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
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
