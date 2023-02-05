import { Text, Pressable, StyleSheet } from "react-native";
import { InputWrapper, InputStyled } from "./Input.styled";
import { useState } from "react";

export const Input = ({
  fieldName,
  handleUser,
  placeholder,
  setKeyboardStatus,
  value,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(true);

  const changePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isPassword = props.isPassword ? true : false;

  return (
    <InputWrapper>
      <InputStyled
        value={value}
        onChangeText={(value) => handleUser(fieldName, value)}
        placeholder={placeholder}
        onFocus={() => setKeyboardStatus(true)}
        secureTextEntry={isPassword ? showPassword : false}
      />
      {isPassword && (
        <Pressable
          style={styles.showPasswordBtn}
          onPress={changePasswordVisibility}
        >
          <Text style={styles.showPasswordBtnText}>Показати</Text>
        </Pressable>
      )}
    </InputWrapper>
  );
};

const styles = StyleSheet.create({
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
});
