import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
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
            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.addButton}>
                <Image
                  style={styles.addButtonIcon}
                  source={require("../../assets/img/add.svg")}
                />
              </View>
            </TouchableOpacity>
          </View>

          <Text style={styles.formTitle}>Регистрация</Text>
          <View>
            <Text>Логин</Text>
            <TextInput />
          </View>
          <View>
            <Text>Адрес электронной почты</Text>
            <TextInput />
          </View>
          <View>
            <Text>Пароль</Text>
            <TextInput />
            <Text>Показать</Text>
          </View>
          <Button title="Зарегистрироваться" />
          <Text>Уже есть аккаунт? Войти</Text>
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
    lineHeight: 1.67,
    textAlign: "center",
  },
});
