import { useState } from "react";
import {
  InputWrapper,
  InputStyled,
  ShowPasswordBtn,
  ShowPasswordBtnText,
} from "./Input.styled";

export const Input = ({
  fieldName,
  handleInput = () => console.log("change in input"),
  placeholder,
  setKeyboardStatus,
  value,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [isFocus, setIsFocus] = useState(false);

  const changePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isPassword = fieldName === "password" ? true : false;

  const focus = () => {
    setKeyboardStatus(true);
    setIsFocus(true);
  };

  const blur = () => {
    setIsFocus(false);
  };

  return (
    <InputWrapper>
      <InputStyled
        value={value}
        onChangeText={(value) => handleInput(fieldName, value)}
        placeholder={placeholder}
        onFocus={focus}
        onBlur={blur}
        focus={isFocus}
        secureTextEntry={isPassword ? showPassword : false}
        isPassword={isPassword}
      />
      {isPassword && (
        <ShowPasswordBtn onPress={changePasswordVisibility}>
          <ShowPasswordBtnText>Показати</ShowPasswordBtnText>
        </ShowPasswordBtn>
      )}
    </InputWrapper>
  );
};
