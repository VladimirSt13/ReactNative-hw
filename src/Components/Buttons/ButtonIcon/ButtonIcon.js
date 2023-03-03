import { Platform } from "react-native";
import { ButtonIconStyled } from "./ButtonIcon.styled";

export const ButtonIcon = ({
  // onPress = () => {
  // console.log(icon);
  // },
  icon: Icon,
  ...props
}) => {
  const type = Platform.select === "ios" ? true : false;

  return (
    <ButtonIconStyled
      type={type}
      // onPress={onPress}
      {...props}
    >
      {Icon && (
        <Icon
          width={props.size && props.size}
          height={props.size && props.size}
        />
      )}
    </ButtonIconStyled>
  );
};
