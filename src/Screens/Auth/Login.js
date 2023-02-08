import { useState, useEffect } from "react";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Alert,
} from "react-native";

import photoBG from "../../img/Photo-BG.jpg";
import { FormContaner, Form } from "./Auth.styled";
import { Wallpaper } from "../../Components/Wallpaper/Wallpaper";
import { Title } from "../../Components/Title/Title";
import { Input } from "../../Components/Input/Input";
import { Button } from "../../Components/Button/Button";
import { Link } from "../../Components/Link/Link";

const initialState = {
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [user, setUser] = useState(initialState);
  const [keyboardStatus, setKeyboardStatus] = useState(false);

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
    console.log(keyboardStatus);
    return () => {};
  }, [keyboardStatus]);

  return (
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
                  Alert.alert("Ви авторизовані");
                }}
              >
                Увійти
              </Button>

              {!keyboardStatus && <Link>Немає акаунту? Зареєструватись</Link>}
            </Form>
          </FormContaner>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Wallpaper>
  );
}
