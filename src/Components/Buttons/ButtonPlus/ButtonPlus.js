import { Platform } from "react-native";
import { ButtonPlusStyled } from "./ButtonPlus.styled";

export const ButtonPlus = ({ onPress, buttonText, icon: Icon }) => {
  const type = Platform.select === "ios" ? true : false;
  console.log(Icon);
  return (
    <ButtonPlusStyled type={type} onPress={onPress}>
      {Icon && <Icon stroke="#ffffff" />}
    </ButtonPlusStyled>
  );
};
