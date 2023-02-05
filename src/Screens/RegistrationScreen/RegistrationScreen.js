import { useState, useEffect } from "react";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  View,
  Pressable,
  Image,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  Keyboard,
  Alert,
} from "react-native";

import photoBG from "../../img/Photo-BG.jpg";
import { FormContaner, Form } from "./RegistrationScreen.styled";
import { Wallpaper } from "./../../Components/Wallpaper/Wallpaper";
import { Avatar } from "../../Components/Avatar/Avatar";
import { Title } from "./../../Components/Title/Title";
import { Input } from "../../Components/Input/Input";
import { Button } from "../../Components/Button/Button";

const initialState = {
  avatar: "",
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [user, setUser] = useState(initialState);
  const [keyboardStatus, setKeyboardStatus] = useState("false");

  const keyboardHide = () => {
    setKeyboardStatus(false);
    Keyboard.dismiss();
  };

  const handleUser = (field, value) =>
    setUser((prevState) => ({
      ...prevState,
      [field]: value,
    }));

  useEffect(() => {
    console.log("start", Platform.OS);

    return () => {};
  }, []);

  useEffect(() => {
    return () => {};
  }, [keyboardStatus]);

  return (
    <Wallpaper image={photoBG}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <KeyboardAvoidingView
        // behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <FormContaner>
            <Form>
              <Avatar />

              <Title keyboardStatus={keyboardStatus}>Реєстрація</Title>

              <Input
                value={user.login}
                fieldName="login"
                placeholder="Логін"
                handleUser={handleUser}
                setKeyboardStatus={setKeyboardStatus}
              />

              <Input
                value={user.email}
                fieldName="email"
                placeholder="Адреса електронної пошти"
                handleUser={handleUser}
                setKeyboardStatus={setKeyboardStatus}
              />

              <Input
                value={user.password}
                fieldName="password"
                placeholder="Пароль"
                handleUser={handleUser}
                setKeyboardStatus={setKeyboardStatus}
              />

              <Button
                onPress={() => {
                  keyboardHide();
                  console.log(user);
                  Alert.alert("Ви зареєстровані");
                }}
              >
                Зареєструватись
              </Button>
              {/* <Pressable
                style={styles.regButton}
                onPress={() => {
                  keyboardHide();
                  console.log(user);
                  Alert.alert("Ви зареєстровані");
                }}
              >
                <Text style={styles.regBtnTitle}>Зареєструватись</Text>
              </Pressable> */}

              {!keyboardStatus && (
                <Pressable>
                  <Text style={styles.redirectLink}>Вже є акаунт? Увійти</Text>
                </Pressable>
              )}
            </Form>
          </FormContaner>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Wallpaper>
  );
}

const styles = StyleSheet.create({
  regButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    // marginBottom: 16,
    height: 51,
    ...Platform.select({
      ios: {
        backgroundColor: "transparent",
        borderColor: "#FF6C00",
      },
      android: {
        backgroundColor: "#FF6C00",
        borderColor: "transparent",
      },
    }),

    borderRadius: 100,
  },
  regBtnTitle: {
    fontSize: 16,
    color: Platform.OS === "ios" ? "#FF6C00" : "#FFFFFF",
  },
  redirectLink: {
    fontSize: 16,
    textAlign: "center",
    color: "#1B4371",
  },
});
