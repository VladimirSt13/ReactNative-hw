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
import { useSelector } from "react-redux";
import { db } from "../../../../firebase/config";
import { getDoc, doc, addDoc, collection } from "firebase/firestore";

export const Comments = ({ route }) => {
  const { postId } = route.params;
  const [comment, setComment] = useState("");
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const { login } = useSelector((state) => state.auth);

  const submitComment = async () => {
    try {
      const docRef = doc(db, "posts", postId);
      const commentsCollectionRef = collection(docRef, "comments");
      await addDoc(commentsCollectionRef, {
        text: comment,
        author: login,
        timestamp: new Date(),
      });

      setComment("");
    } catch (error) {
      console.log(
        "🚀 ~ file: Comments.js:31 ~ createComment ~ error:",
        error.message
      );
    }
    keyboardHide();
  };

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
          <PostComments
            comment={comment}
            setComment={setComment}
            submitComment={submitComment}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
