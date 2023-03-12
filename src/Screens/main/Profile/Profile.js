import { useEffect, useState } from "react";
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

import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../../../firebase/config";
import publications from "../../../publications.json";
import { authSignOutUser } from "../../../redux/auth/authOperations";
import { getUser } from "../../../redux/auth/authSelectors";

export const Profile = () => {
  const [posts, setPosts] = useState(publications);
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const getUserPosts = () => {
    try {
      const q = query(
        collection(db, "posts"),
        where("userId", "==", user.userId)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        setPosts(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      });
      return unsubscribe;
    } catch (error) {
      console.log(
        "🚀 ~ file: Profile.js:38 ~ getUserPosts ~ error:",
        error.message
      );
      return () => {};
    }
  };

  useEffect(() => {
    const unsubscribe = getUserPosts();
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    console.log("clickLogout");
    dispatch(authSignOutUser());
  };

  return (
    <Wallpaper image={photoBG}>
      <ProfileContainer style={{ marginTop: 148 }}>
        <Avatar avatar={user.avatar} />
        <ButtonIcon
          style={{ position: "absolute", right: 0, top: 22 }}
          onPress={handleLogout}
          icon={LogOutIcon}
          mr={16}
          size={24}
        />
        <View style={{ marginTop: 92 }}>
          <UserName>{user.login}</UserName>
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
