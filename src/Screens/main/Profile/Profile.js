import { useState } from "react";
import { FlatList, View } from "react-native";

import photoBG from "../../../img/Photo-BG.jpg";

import { ProfileContainer, UserName } from "./Profile.styled";

import {
  Avatar,
  ButtonIcon,
  PostProfile,
  Wallpaper,
} from "../../../Components";
import LogOutIcon from "../../../img/icons/logOut.svg";

import publications from "../../../publications.json";

export const Profile = ({ navigation }) => {
  const [posts, setPosts] = useState(publications);

  const handleLogout = () => {
    // код для реєстрації користувача
    navigation.navigate("Login");
  };

  return (
    <Wallpaper image={photoBG}>
      <ProfileContainer style={{ marginTop: 148 }}>
        <Avatar />
        <ButtonIcon
          style={{ position: "absolute", right: 0, top: 22 }}
          onPress={handleLogout}
          icon={LogOutIcon}
          mr={16}
          size={24}
        />
        <View style={{ marginTop: 92 }}>
          <UserName>Natali Romanova</UserName>
        </View>
        <FlatList
          style={{ marginTop: 32 }}
          data={posts}
          renderItem={({ item }) => {
            return <PostProfile item={item} />;
          }}
          keyExtractor={(item) => item.id}
        />
      </ProfileContainer>
    </Wallpaper>
  );
};
