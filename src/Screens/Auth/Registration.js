import { useState, useEffect } from "react";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Alert,
  View,
  StyleSheet,
  Text,
  // Dimensions,
} from "react-native";

import photoBG from "../../img/Photo-BG.jpg";
import { FormContaner, Form } from "./Auth.styled";
import { Wallpaper } from "../../components/Wallpaper/Wallpaper";
import { Avatar } from "../../components/Avatar/Avatar";
import { Title } from "../../components/Title/Title";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { Link } from "../../components/Link/Link";

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

  useEffect(() => {
    // console.log(keyboardStatus);
    return () => {};
  }, [keyboardStatus]);

  const onPress = () => navigation.navigate("Login");

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
                    Alert.alert("Ви зареєстровані");
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
