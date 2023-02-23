import { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";
import { PostComments } from "../../Components";

const initialItem = {
  id: "20",
  img: "https://spadok.org.ua/images/karpaty-cikavi-fakty.webp",
  postName: "Forest",
  location: "Ivano-Frankivs'k Region, Ukraine",
  comments: "1",
  commetsData: [
    {
      authorId: "123",
      userAvatar: "",
      userName: "name",
      commentDate: "09 июня, 2020 | 09:14",
      commentText:
        "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
    },
    {
      authorId: "124",
      author: "name2",
      userAvatar: "",
      commentDate: "09 июня, 2020 | 09:14",
      commentText:
        "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
    },
    {
      authorId: "123",
      userAvatar: "",
      author: "name",
      commentDate: "09 июня, 2020 | 09:14",
      commentText: "Thank you! That was very helpful!",
    },
  ],
};

export const Comments = ({ item = initialItem, ...props }) => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const keyboardHide = () => {
    setKeyboardStatus(false);
    // setUser(initialState);
    Keyboard.dismiss();
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
          <PostComments item={item} {...props} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
