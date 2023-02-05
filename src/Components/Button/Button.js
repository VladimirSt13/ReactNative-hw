import { Platform } from "react-native";
import { ButtonStyled, TextStyled } from "./Button.styled";

export const Button = ({ children, onPress, ...props }) => {
  const type = Platform.select === "ios" ? true : false;

  return (
    <ButtonStyled type={type} onPress={onPress}>
      <TextStyled>{children}</TextStyled>
    </ButtonStyled>
  );
};
