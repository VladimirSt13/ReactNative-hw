import { useState, useEffect } from "react";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  View,
  StyleSheet,
  Text,
  // Dimensions,
} from "react-native";

import photoBG from "../../img/Photo-BG.jpg";
import { FormContaner, Form } from "./Auth.styled";

import {
  Wallpaper,
  Avatar,
  Title,
  Input,
  Button,
  Link,
} from "../../Components";

const initialState = {
  avatar: "",
  login: "",
  email: "",
  password: "",
};

export const Registration = ({ navigation, route }) => {
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

  const onPress = () => navigation.navigate("Login");

  const handleRegister = () => {
    // код для реєстрації користувача
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Wallpaper image={photoBG}>
        <TouchableWithoutFeedback onPress={keyboardHide}>
          <KeyboardAvoidingView
          // behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <FormContaner pt="92" pb="44" keyboardStatus={keyboardStatus}>
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
                    handleRegister();
                  }}
                  buttonText="Зареєструватись"
                />

                {!keyboardStatus && (
                  <Link onPress={onPress}>
                    Вже є акаунт?{" "}
                    <Text style={{ color: "#ff6347" }}>Увійти</Text>
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
