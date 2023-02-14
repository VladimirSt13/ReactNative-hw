import { Platform } from "react-native";
import { ButtonStyled, TextStyled } from "./Button.styled";

export const Button = ({ onPress, buttonText, icon }) => {
  const type = Platform.select === "ios" ? true : false;
  console;
  return (
    <ButtonStyled type={type} onPress={onPress}>
      {buttonText && <TextStyled>{buttonText}</TextStyled>}
    </ButtonStyled>
  );
};
