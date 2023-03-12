import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { Button, ButtonRound, Input } from "../../Components";
import { AddPhoto } from "../../Components/AddPhoto/AddPhoto";
import Trash from "../../img/icons/trash";

import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../../firebase/config";
import { getUser } from "./../../redux/auth/authSelectors";

const initialPost = {
  postName: "",
  location: "",
  img: "",
};
const initialLocation = {
  latitude: 0,
  longitude: 0,
};

export const CreatePost = ({ navigation }) => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [post, setPost] = useState(initialPost);
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(initialLocation);
  const [errorMsg, setErrorMsg] = useState(null);
  const { userId, login } = useSelector(getUser);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setKeyboardStatus(true)
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardStatus(false)
    );

    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }

        const { coords } = await Location.getCurrentPositionAsync();
        setLocation(coords);
      } catch (error) {
        console.log("🚀 ~ file: CreatePost.js:58 ~ error:", error.message);
      }
    })();

    return () => {
      setPost(initialPost);
      setPhoto(null);
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const keyboardHide = () => {
    setKeyboardStatus(false);
    Keyboard.dismiss();
  };

  const uploadPhotoToServer = async () => {
    try {
      const response = await fetch(photo);
      const file = await response.blob();
      const uniquePostId = Date.now().toString();

      const postImage = ref(storage, `postImages/${uniquePostId}`);

      const data = await uploadBytes(postImage, file);

      const processedPhoto = await getDownloadURL(postImage);

      return processedPhoto;
    } catch (error) {
      console.log(
        "🚀 ~ file: CreatePost.js:92 ~ uploadPhotoToServer ~ error:",
        error.message
      );
    }
  };

  const uploadPostToDb = async (post) => {
    try {
      const createPost = await addDoc(collection(db, "posts"), post);
    } catch (error) {
      console.log(
        "🚀 ~ file: CreatePost.js:105 ~ uploadPostToDb ~ error:",
        error.message
      );
    }
  };

  const handlePost = (field, value) => {
    setPost((prevState) => ({ ...prevState, [field]: value }));
  };

  const submitPost = async () => {
    keyboardHide();

    try {
      const photoUrl = await uploadPhotoToServer();

      const locationParts = post.location ? post.location.split(",") : [];
      const region = locationParts[0] ? locationParts[0].trim() : "";
      const country = locationParts[1] ? locationParts[1].trim() : "";

      const formattedPost = {
        ...post,
        img: photoUrl ? photoUrl : "",
        location: {
          region,
          country,
          lat: location?.latitude,
          long: location?.longitude,
        },
        userId,
        userLogin: login,
      };

      await uploadPostToDb(formattedPost);

      resetPost();
      navigation.navigate("Posts");
    } catch (error) {
      console.log(
        "🚀 ~ file: CreatePost.js:133 ~ submitPost ~ error:",
        error.message
      );
    }
  };

  const resetPost = () => {
    setPost(initialPost);
    setPhoto(null);
    setLocation(initialLocation);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View
          style={{
            padding: 16,
            flex: 1,
            justifyContent: keyboardStatus ? "flex-end" : "space-between",
          }}
        >
          <View>
            <AddPhoto
              photo={photo}
              setPhoto={setPhoto}
              setLocation={setLocation}
            />

            <View>
              <Input
                value={post.postName}
                fieldName="postName"
                placeholder="Назва"
                setKeyboardStatus={setKeyboardStatus}
                handleInput={handlePost}
              />
              <Input
                value={post.location}
                fieldName="location"
                placeholder="Місцевість"
                setKeyboardStatus={setKeyboardStatus}
                handleInput={handlePost}
              />
              <Button onPress={() => submitPost()} buttonText="Опублікувати" />
            </View>
            {!keyboardStatus && (
              <ButtonRound
                icon={Trash}
                size={40}
                color={"#E1E1E1"}
                ml="auto"
                mr="auto"
                onPress={resetPost}
              />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
