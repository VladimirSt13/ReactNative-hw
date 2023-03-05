import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";

import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button, ButtonRound, Input } from "../../Components";
import { AddPhoto } from "../../Components/AddPhoto/AddPhoto";
import Trash from "../../img/icons/trash";

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
  console.log(
    "🚀 ~ file: CreatePost.js:27 ~ CreatePost ~ keyboardStatus:",
    keyboardStatus
  );
  const [post, setPost] = useState(initialPost);
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(initialLocation);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setKeyboardStatus(true)
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardStatus(false)
    );

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

  const handlePost = (field, value) => {
    setPost((prevState) => ({ ...prevState, [field]: value }));
  };

  const submitPost = () => {
    keyboardHide();

    const formattedPost = {
      ...post,
      img: photo,
      location: {
        region: post?.location.split(",")[0].trim(),
        country: post?.location.split(",")[1].trim(),
        lat: location?.latitude,
        long: location?.longitude,
      },
      id: nanoid(),
    };

    resetPost();
    navigation.navigate("Posts", { formattedPost });
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
