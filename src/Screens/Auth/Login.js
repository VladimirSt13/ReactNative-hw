import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  // Dimensions,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

import photoBG from "../../img/Photo-BG.jpg";
import { Form, FormContainer } from "./Auth.styled";

import { Button, Input, Link, Title, Wallpaper } from "../../Components";

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
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <Wallpaper image={photoBG}>
        <TouchableWithoutFeedback onPress={keyboardHide}>
          <FormContainer pt="32" pb="144" keyboardStatus={keyboardStatus}>
            <Form>
              <Title keyboardStatus={keyboardStatus}>Увійти</Title>
              <Input
                value={user.email}
                fieldName="email"
                placeholder="Адреса електронної пошти"
                handleInput={handleUser}
                setKeyboardStatus={setKeyboardStatus}
                autoFocus={true}
              />
              <Input
                value={user.password}
                fieldName="password"
                placeholder="Пароль"
                handleInput={handleUser}
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
          </FormContainer>
        </TouchableWithoutFeedback>
      </Wallpaper>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
