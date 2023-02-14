import { useState, useEffect } from "react";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Alert,
  View,
  StyleSheet,
  // Dimensions,
  Text,
} from "react-native";

import photoBG from "../../img/Photo-BG.jpg";
import { FormContaner, Form } from "./Auth.styled";
import { Wallpaper } from "../../components/Wallpaper/Wallpaper";
import { Title } from "../../components/Title/Title";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { Link } from "../../components/Link/Link";

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

  useEffect(() => {
    console.log("start", Platform.OS);

    return () => {};
  }, []);

  useEffect(() => {
    // console.log("keybStatus", keyboardStatus);

    return () => {};
  }, [keyboardStatus]);

  const onPress = () => navigation.navigate("Registration");

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
                    Alert.alert("Ви авторизовані");
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
