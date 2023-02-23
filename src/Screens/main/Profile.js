import { useState } from "react";
import { View, FlatList } from "react-native";

import { Wallpaper, Avatar, Post } from "../../Components";

import { ProfileContainer, UserName } from "./Profile.styled";

import photoBG from "../../img/Photo-BG.jpg";

import publications from "../../publications.json";

export const Profile = ({ navigation }) => {
  const [posts, setPosts] = useState(publications);

  return (
    <Wallpaper image={photoBG}>
      <ProfileContainer style={{ marginTop: 148 }}>
        <Avatar />
        <View style={{ marginTop: 92 }}>
          <UserName>Natali Romanova</UserName>
        </View>
        <FlatList
          style={{ marginTop: 32 }}
          data={posts}
          renderItem={({ item }) => {
            return <Post item={item} />;
          }}
          keyExtractor={(item) => item.id}
        />
      </ProfileContainer>
    </Wallpaper>
  );
};
