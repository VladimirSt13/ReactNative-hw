import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { AddPhoto, Button, ButtonRound, Input } from "../../components";
import Trash from "../../img/icons/trash";

export const CreatePost = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  const keyboardHide = ({ navigation }) => {
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
          }}
        >
          <View>
            <AddPhoto />
            <Input
              value={null}
              fieldName="locationName"
              placeholder="Назва"
              setKeyboardStatus={setKeyboardStatus}
            />
            <Input
              value={null}
              fieldName="location"
              placeholder="Місцевість"
              setKeyboardStatus={setKeyboardStatus}
            />
            <Button
              onPress={() => {
                keyboardHide();
                console.log("press Submit post");
              }}
              buttonText="Опублікувати"
            />
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
