import { useState, useEffect } from "react";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ImageBackground,
  View,
  Pressable,
  Image,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  Keyboard,
} from "react-native";

const initialState = {
  avatar: "",
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [user, setUser] = useState(initialState);
  const [keyboardStatus, setKeyboardStatus] = useState("false");
  const [showPassword, setShowPassword] = useState(true);

  const keyboardHide = () => {
    setKeyboardStatus(false);
    Keyboard.dismiss();
  };

  const changePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
    <ImageBackground
      style={styles.bgImage}
      source={require("../../assets/img/Photo-BG.jpg")}
    >
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <KeyboardAvoidingView
        // behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.formContainer}>
            <View
              style={{
                ...styles.form,
                marginBottom: keyboardStatus ? 15 : 78,
              }}
            >
              <View style={styles.avatar}>
                <Pressable style={styles.addButton}>
                  <Image
                    style={styles.addButtonIcon}
                    source={require("../../assets/img/add.png")}
                  />
                </Pressable>
              </View>

              <Text
                style={{
                  ...styles.formTitle,
                  marginBottom: keyboardStatus ? 15 : 32,
                }}
              >
                Реєстрація
              </Text>

              <TextInput
                style={styles.input}
                value={user.login}
                onChangeText={(value) => handleUser("login", value)}
                placeholder="Логін"
                onFocus={() => setKeyboardStatus(true)}
              />
              
              <TextInput
                style={styles.input}
                value={user.email}
                onChangeText={(value) => handleUser("email", value)}
                placeholder="Адреса електронної пошти"
                onFocus={() => setKeyboardStatus(true)}
              />

              <View style={{ marginBottom: keyboardStatus ? 15 : 42 }}>
                <TextInput
                  style={styles.input}
                  value={user.password}
                  onChangeText={(value) => handleUser("password", value)}
                  placeholder="Пароль"
                  secureTextEntry={showPassword}
                  onFocus={() => setKeyboardStatus(true)}
                />
                <Pressable
                  style={styles.showPasswordBtn}
                  onPress={changePasswordVisibility}
                >
                  <Text style={styles.showPasswordBtnText}>Показати</Text>
                </Pressable>
              </View>

              <Pressable
                style={styles.regButton}
                onPress={() => {
                  keyboardHide();
                  console.log(user);
                }}
              >
                <Text style={styles.regBtnTitle}>Зареєструватись</Text>
              </Pressable>
              {!keyboardStatus && (
                <Pressable>
                  <Text style={styles.redirectLink}>Вже є акаунт? Увійти</Text>
                </Pressable>
              )}
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  formContainer: {
    maxWidth: 375,
    maxHeight: 550,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  form: {
    alignItems: "center",
    marginTop: 92,
    marginHorizontal: 16,
  },
  avatar: {
    position: "absolute",
    top: -152,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addButton: {
    position: "absolute",
    bottom: 14,
    right: -12.5,
  },
  addButtonIcon: {
    width: 25,
    height: 25,
  },
  formTitle: {
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
  },
  input: {
    paddingHorizontal: 16,
    width: 343,
    height: 50,
    backgroundColor: "#f6f6f6",
    border: "1px solid #e8e8e8",
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 16,
  },
  showPasswordBtn: {
    position: "absolute",
    right: 16,
    top: 14,
  },
  showPasswordBtnText: {
    fontSize: 16,
    color: "#1B4371",
    textAlign: "right",
  },
  regButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    height: 51,
    width: 343,
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
