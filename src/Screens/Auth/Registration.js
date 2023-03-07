import { useState, useEffect } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

import photoBG from "../../img/Photo-BG.jpg";
import { Form, FormContainer } from "./Auth.styled";

import {
  Avatar,
  Button,
  Input,
  Link,
  Title,
  Wallpaper,
} from "../../Components";

import { authSignUpUser } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";

const initialState = {
  avatar: "",
  login: "",
  email: "",
  password: "",
};

export const Registration = ({ navigation, route }) => {
  const [user, setUser] = useState(initialState);
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setKeyboardStatus(true)
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardStatus(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const dispatch = useDispatch();

  const keyboardHide = () => {
    setKeyboardStatus(false);
    Keyboard.dismiss();
  };

  const handleUser = (field, value) =>
    setUser((prevState) => ({
      ...prevState,
      [field]: value,
    }));

  const onPress = () => navigation.navigate("Login");

  const handleSubmit = () => {
    setKeyboardStatus(false);
    dispatch(authSignUpUser(user));
    setUser(initialState);
    Keyboard.dismiss();
  };

  //TODO при потерb фокуса инпуты сбрасываются....

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <Wallpaper image={photoBG}>
        <TouchableWithoutFeedback onPress={keyboardHide}>
          <FormContainer pt="92" pb="44" keyboardStatus={keyboardStatus}>
            <Avatar />
            <Form>
              <Title keyboardStatus={keyboardStatus}>Реєстрація</Title>

              <Input
                value={user.login}
                fieldName="login"
                placeholder="Логін"
                handleInput={handleUser}
                setKeyboardStatus={setKeyboardStatus}
              />

              <Input
                value={user.email}
                fieldName="email"
                placeholder="Адреса електронної пошти"
                handleInput={handleUser}
                setKeyboardStatus={setKeyboardStatus}
              />

              <Input
                value={user.password}
                fieldName="password"
                placeholder="Пароль"
                handleInput={handleUser}
                setKeyboardStatus={setKeyboardStatus}
              />

              <Button onPress={handleSubmit} buttonText="Зареєструватись" />

              {!keyboardStatus && (
                <Link onPress={onPress}>
                  Вже є акаунт? <Text style={{ color: "#ff6347" }}>Увійти</Text>
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
