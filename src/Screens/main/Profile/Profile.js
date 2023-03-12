import { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { authSignOutUser } from "../../../redux/auth/authOperations";
import { db } from "../../../../firebase/config";
import { collection, query, where, onSnapshot } from "firebase/firestore";

export const Profile = () => {
  const [posts, setPosts] = useState(publications);
  const { userId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const getUserPosts = () => {
    try {
      const q = query(collection(db, "posts"), where("userId", "==", userId));
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
