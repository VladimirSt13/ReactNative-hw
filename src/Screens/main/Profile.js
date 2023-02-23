import { useState, useEffect } from "react";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  // Dimensions,
} from "react-native";

import {
  Wallpaper,
  Avatar,
  Title,
  Input,
  Button,
  Link,
  Post,
} from "../../Components";

import photoBG from "../../img/Photo-BG.jpg";

const publications = require("../../publications.json");

export const Profile = ({ navigation }) => {
  const [posts, setPosts] = useState(publications);

  return (
    <Wallpaper image={photoBG}>
      <View style={styles.container}>
        <View style={{ marginBottom: 140 }}>
          <Image source={require("../../img/Home/avatar.jpg")} />
        </View>

        <FlatList
          style={{}}
          data={posts}
          renderItem={({ item }) => {
            return <Post item={item} />;
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </Wallpaper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    flexShrink: 1,
    marginTop: 140,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#ffffff",
    width: "100%",
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
