import { useState, useEffect } from "react";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Alert,
  Button as ButtonRN,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

import photoBG from "../../img/Photo-BG.jpg";
import { FormContaner, Form } from "./Auth.styled";
import { Wallpaper } from "../../Components/Wallpaper/Wallpaper";
import { Avatar } from "../../Components/Avatar/Avatar";
import { Title } from "../../Components/Title/Title";
import { Input } from "../../Components/Input/Input";
import { Button } from "../../Components/Button/Button";
import { Link } from "../../Components/Link/Link";

const initialState = {
  avatar: "",
  login: "",
  email: "",
  password: "",
};

export const Registration = ({ navigation, route }) => {
  const [user, setUser] = useState(initialState);
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  const [dimensions, setdimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );

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
    const onChange = () => {
      const width = Dimensions.get("window").width - 20 * 2;
      setdimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  useEffect(() => {
    console.log(keyboardStatus);
    return () => {};
  }, [keyboardStatus]);

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

                {/* <Button
                  onPress={() => {
                    keyboardHide();
                    console.log(user);
                    Alert.alert("Ви зареєстровані");
                  }}
                >
                  Зареєструватись
                </Button>

                {!keyboardStatus && <Link>Вже є акаунт? Увійти</Link>} */}

                <ButtonRN
                  title="Go to Login"
                  onPress={() => navigation.navigate("Login")}
                />

                <ButtonRN
                  title="Home"
                  onPress={() => navigation.navigate("Home")}
                />
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
