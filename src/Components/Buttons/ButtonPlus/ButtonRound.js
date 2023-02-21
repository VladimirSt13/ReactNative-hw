import { Platform } from "react-native";
import { ButtonRoundStyled } from "./ButtonRound.styled";

export const ButtonRound = ({
  onPress = () => console.log("press on Button round"),
  icon: Icon,
  color = "#000000",
  ...props
}) => {
  const type = Platform.select === "ios" ? true : false;
  return (
    <ButtonRoundStyled type={type} color={color} onPress={onPress} {...props}>
      {Icon && <Icon stroke="#ffffff" />}
    </ButtonRoundStyled>
  );
};
