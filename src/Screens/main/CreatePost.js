import { nanoid } from "nanoid";
import React, { useState } from "react";

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
  locationName: "",
  location: "",
  img: "",
};

export const CreatePost = ({ navigation }) => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [post, setPost] = useState(initialPost);
  const [photo, setPhoto] = useState(null);

  const keyboardHide = () => {
    setKeyboardStatus(false);
    Keyboard.dismiss();
  };

  const handlePost = (field, value) => {
    setPost((prevState) => ({ ...prevState, [field]: value }));
  };

  const submitPost = () => {
    keyboardHide();
    console.log("🚀 ~ file: CreatePost.js:56 ~ submitPost ~ post:", post);

    const formattedPost = {
      ...post,
      img: photo,
      location: {
        region: post.location.split(",")[0],
        country: post.location.split(",")[1],
      },
      id: nanoid(),
    };
    setPost(initialPost);

    navigation.navigate("Posts", { formattedPost });
  };

  const handleTrash = () => {
    console.log("🚀 ~ file: CreatePost.js:55 ~ handleTrash ~ handleTrash");
    setPost(initialPost);
    setPhoto(null);
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
            <AddPhoto photo={photo} setPhoto={setPhoto} />

            <View>
              <Input
                value={null}
                fieldName="postName"
                placeholder="Назва"
                setKeyboardStatus={setKeyboardStatus}
                handleInput={handlePost}
              />
              <Input
                value={null}
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
                onPress={handleTrash}
              />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
