import { Pressable, Text } from "react-native";
import { LinkStyled } from "./Link.styled";

export const Link = ({ children, ...props }) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
        },
      ]}
    >
      <LinkStyled>{children}</LinkStyled>
    </Pressable>
  );
};
