import { Platform } from "react-native";
import { ButtonStyled, TextStyled } from "./Button.styled";

export const Button = ({ onPress, buttonText, icon: Icon }) => {
  const type = Platform.select === "ios" ? true : false;

  return (
    <ButtonStyled type={type} onPress={onPress}>
      {buttonText && <TextStyled>{buttonText}</TextStyled>}
      {Icon && <Icon />}
    </ButtonStyled>
  );
};
