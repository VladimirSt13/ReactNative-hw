import { useState } from "react";
import {
  InputWrapper,
  InputStyled,
  ShowPasswordBtn,
  ShowPasswordBtnText,
} from "./Input.styled";

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

  const isPassword = fieldName==="password" ? true : false;

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
        <ShowPasswordBtn
          onPress={changePasswordVisibility}
        >
          <ShowPasswordBtnText>Показати</ShowPasswordBtnText>
        </ShowPasswordBtn>
      )}
    </InputWrapper>
  );
};