import { useState, useEffect } from "react";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  View,
  StyleSheet,
  // Dimensions,
  Text,
} from "react-native";

import photoBG from "../../img/Photo-BG.jpg";
import { FormContaner, Form } from "./Auth.styled";

import { Wallpaper, Title, Input, Button, Link } from "../../Components";
import Home from "../main/Home";

const initialState = {
  email: "",
  password: "",
};

export const Login = ({ navigation, route }) => {
  const [user, setUser] = useState(initialState);
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  const keyboardHide = () => {
    setKeyboardStatus(false);
    setUser(initialState);
    Keyboard.dismiss();
  };

  const handleUser = (field, value) =>
    setUser((prevState) => ({
      ...prevState,
      [field]: value,
    }));

  const onPress = () => navigation.navigate("Registration");

  const handleLogin = () => {
    // код для авторизації користувача
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Wallpaper image={photoBG}>
        <TouchableWithoutFeedback onPress={keyboardHide}>
          <KeyboardAvoidingView
          // behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <FormContaner pt="32" pb="144" keyboardStatus={keyboardStatus}>
              <Form>
                <Title keyboardStatus={keyboardStatus}>Увійти</Title>
                <Input
                  value={user.email}
                  fieldName="email"
                  placeholder="Адреса електронної пошти"
                  handleUser={handleUser}
                  setKeyboardStatus={setKeyboardStatus}
                  autoFocus={true}
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
                    handleLogin();
                  }}
                  buttonText=" Увійти"
                />

                {!keyboardStatus && (
                  <Link onPress={onPress}>
                    Немає акаунту?{" "}
                    <Text style={{ color: "#ff6347" }}>Зареєструватись</Text>
                  </Link>
                )}
              </Form>
            </FormContaner>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </Wallpaper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
