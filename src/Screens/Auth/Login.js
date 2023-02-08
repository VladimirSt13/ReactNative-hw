import { useState, useEffect } from "react";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Alert,
  Button as ButtonRN,
  View,
  StyleSheet,
  Dimensions,
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

export const Login = ({ navigation, route }) => {
  const [user, setUser] = useState(initialState);
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  const [dimensions, setdimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  const keyboardHide = () => {
    setKeyboardStatus(false);
    setState(initialState);
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
    const onChange = () => {
      const width = Dimensions.get("window").width - 20 * 2;
      setdimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      // Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Wallpaper image={photoBG}>
        <TouchableWithoutFeedback onPress={keyboardHide}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
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
                {/* <Button
                  onPress={() => {
                    keyboardHide();
                    console.log(user);
                    Alert.alert("Ви авторизовані");
                  }}
                >
                  Увійти
                </Button>

                {!keyboardStatus && <Link>Немає акаунту? Зареєструватись</Link>} */}

                <ButtonRN
                  title="Reg"
                  onPress={() => navigation.navigate("Registration")}
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
