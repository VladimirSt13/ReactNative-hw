import { useState } from "react";
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
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  console.log("start");
  const [keyboardStatus, setKeyboardStatus] = useState("false");

  const keyboardHide = () => {
    console.log("keyboardHide");
    setKeyboardStatus(false);
    Keyboard.dismiss();
  };

  return (
    <ImageBackground
      style={styles.bgImage}
      source={require("../../assets/img/Photo-BG.jpg")}
    >
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.formContainer}>
            <View style={styles.form}>
              <View style={styles.avatar}>
                <Pressable style={styles.addButton}>
                  <Image
                    style={styles.addButtonIcon}
                    source={require("../../assets/img/add.png")}
                  />
                </Pressable>
              </View>

              <Text style={styles.formTitle}>Реєстрація</Text>

              <TextInput
                style={styles.input}
                // onChangeText={ }
                // value={ }
                placeholder="Логін"
                onFocus={() => setKeyboardStatus(true)}
              />
              <TextInput
                style={styles.input}
                // onChangeText={ }
                // value={ }
                placeholder="Адреса електронної пошти"
                onFocus={() => setKeyboardStatus(true)}
              />
              <View style={styles.passwordWrapper}>
                <TextInput
                  style={styles.input}
                  // onChangeText={ }
                  // value={ }
                  placeholder="Пароль"
                  secureTextEntry={true}
                  onFocus={() => setKeyboardStatus(true)}
                />
                <Pressable style={styles.showPasswordBtn}>
                  <Text style={styles.showPasswordBtnText}>Показати</Text>
                </Pressable>
              </View>

              <Pressable style={styles.regButton}>
                <Text style={styles.regBtnTitle}>Зареєструватись</Text>
              </Pressable>

              <Pressable>
                <Text style={styles.redirectLink}>Вже є акаунт? Увійти</Text>
              </Pressable>
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
    marginBottom: 78,
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
    marginBottom: 32,
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
  passwordWrapper: {
    marginBottom: 42,
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
    paddingVertical: 32,
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
    // color: Platform.OS === "ios" ? "#FF6C00" : "#FFFFFF",
    color: "#1B4371",
  },
  redirectLink: {
    fontSize: 16,
    textAlign: "center",
    color: "#1B4371",
  },
});
