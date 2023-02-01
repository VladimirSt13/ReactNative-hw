import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={require("../../assets/img/Photo-BG.jpg")}
      >
        <View style={styles.form}>
          <View style={styles.avatar}>
            <TouchableOpacity activeOpacity={0.8} style={styles.addButton}>
              <Image
                style={styles.addButtonIcon}
                source={require("../../assets/img/add.svg")}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.formTitle}>Реєстрація</Text>

          <View style={styles.inputsWrapper}>
            <TextInput
              style={styles.input}
              // onChangeText={ }
              // value={ }
              placeholder="Логін"
            />
            <TextInput
              style={styles.input}
              // onChangeText={ }
              // value={ }
              placeholder="Адреса електронної пошти"
            />
            <View style={styles.passwordWrapper}>
              <TextInput
                style={styles.input}
                // onChangeText={ }
                // value={ }
                placeholder="Пароль"
              />
              <Text style={styles.showPasswordBtn}>Показать</Text>
            </View>
          </View>

          <TouchableOpacity activeOpacity={0.8} style={styles.regButton}>
            <Text style={styles.regBtnTitle}>Зареєструватись</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.redirectLink}>Уже есть аккаунт? Войти</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    position: "relative",
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 76,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatar: {
    position: "absolute",
    left: "50%",
    transform: "translate(-50%)",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addButton: {
    position: "absolute",
    top: 81,
    right: -12,
  },
  addButtonIcon: {
    width: 25,
    height: 25,
  },
  formTitle: {
    marginBottom: 32,
    fontWeight: 600,
    fontSize: 30,
    lineHeight: "1.67",
    textAlign: "center",
  },
  inputsWrapper: {
    marginBottom: 42,
    display: "flex",
    gap: 16,
  },
  input: {
    padding: 16,
    height: 44,
    backgroundColor: "#f6f6f6",
    border: "1px solid #e8e8e8",
    borderRadius: 8,
    fontSize: 16,
  },
  passwordWrapper: {
    position: "relative",
    marginBottom: 0,
  },
  showPasswordBtn: {
    position: "absolute",
    right: 16,
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: 16,
    color: "#1B4371",
    textAlign: "right",
  },
  regButton: {
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 32,
    marginBottom: 16,
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  regBtnTitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#ffffff",
  },
  redirectLink: {
    fontSize: 16,
    textAlign: "center",
    color: "#1B4371",
  },
});
