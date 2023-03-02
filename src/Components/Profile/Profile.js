import { useState } from "react";
import { FlatList, View } from "react-native";

import photoBG from "../../img/Photo-BG.jpg";
import { ProfileContainer, UserName } from "./Profile.styled";

import publications from "../../publications.json";
import { Post } from "../Post/Post";
import { Avatar } from "./../Avatar/Avatar";
import { Wallpaper } from "./../Wallpaper/Wallpaper";

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
