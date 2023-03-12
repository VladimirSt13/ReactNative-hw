import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { db } from "../../../../firebase/config";
import { PostComments } from "../../../Components";
import { getUser } from "../../../redux/auth/authSelectors";

export const Comments = ({ route }) => {
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const { postId } = route.params;
  const { login } = useSelector(getUser);

  useEffect(() => {
    const unsubscribe = getAllComments();

    return () => unsubscribe();
  }, []);

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

  const getAllComments = () => {
    try {
      const docRef = doc(db, "posts", postId);
      const commentsCollectionRef = collection(docRef, "comments");
      const unsubscribe = onSnapshot(commentsCollectionRef, (querySnapshot) => {
        const allComments = querySnapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
            timestamp: doc.data().timestamp.toDate(), // Convert timestamp to Date object
            formattedDate: doc.data().timestamp.toDate().toLocaleDateString(), // Format date as string
            formattedTime: doc.data().timestamp.toDate().toLocaleTimeString(),
          }))
          .sort((a, b) => a.timestamp - b.timestamp);
        setAllComments(allComments);
      });
      return unsubscribe;
    } catch (error) {
      console.log(
        "🚀 ~ file: Comments.js:31 ~ createComment ~ error:",
        error.message
      );
      return () => {};
    }
  };

  const keyboardHide = () => {
    setKeyboardStatus(false);
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
            allComments={allComments}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
