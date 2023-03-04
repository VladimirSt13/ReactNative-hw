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

const initialState = {
  locationName: "",
  location: "",
  photo: "",
};

export const CreatePost = ({ navigation }) => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [post, setPost] = useState(initialState);

  const keyboardHide = () => {
    setKeyboardStatus(false);
    Keyboard.dismiss();
  };

  const handlePhoto = (photo) => {
    handlePost("photo", photo);
    console.log("🚀 ~ file: CreatePost.js:30 ~ handlePhoto ~ photo:", post);

    return photo;
  };

  const handlePost = (field, value) =>
    setPost((prevState) => ({ ...prevState, [field]: value }));

  const submitPost = () => {
    keyboardHide();
    navigation.navigate("PostsHome", post);
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
            <AddPhoto handlePhoto={handlePhoto} />

            <View>
              <Input
                value={null}
                fieldName="locationName"
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
                // onPress={onPress}
              />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
