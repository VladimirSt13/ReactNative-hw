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
import { useDispatch } from "react-redux";
import { authSignOutUser } from "../../../redux/auth/authOperations";

export const Profile = () => {
  const [posts, setPosts] = useState(publications);
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log('clickLogout')
    dispatch(authSignOutUser());
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
