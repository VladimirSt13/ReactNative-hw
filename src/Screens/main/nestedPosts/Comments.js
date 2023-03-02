import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { PostComments } from "../../../Components";

const initialPost = {
  id: "20",
  authorPostId: "124",
  img: "https://spadok.org.ua/images/karpaty-cikavi-fakty.webp",
  postName: "Forest",
  location: "Ivano-Frankivs'k Region, Ukraine",
  comments: "1",
  commentsData: [
    {
      id: "1",
      authorId: "123",
      userAvatar: "https://api.multiavatar.com/1.png",
      author: "name",
      commentDate: "09 июня, 2020 | 09:14",
      commentText:
        "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
    },
    {
      id: "2",
      authorId: "124",
      userAvatar: "https://api.multiavatar.com/2.png",
      author: "name2",
      commentDate: "09 июня, 2020 | 09:14",
      commentText:
        "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
    },
    {
      id: "3",
      authorId: "123",
      userAvatar: "https://api.multiavatar.com/3.png",
      author: "name",
      commentDate: "09 июня, 2020 | 09:14",
      commentText: "Thank you! That was very helpful!",
    },
    {
      id: "4",
      authorId: "123",
      userAvatar: "https://api.multiavatar.com/4.png",
      author: "name",
      commentDate: "09 июня, 2020 | 09:15",
      commentText: "...!",
    },
  ],
};

export const Comments = ({ post = initialPost }) => {
  const { params } = useRoute();
  const navigation = useNavigation();
  const { photo, id } = params;

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
            width: "100%",
          }}
        >
          <PostComments post={post} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
