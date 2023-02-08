import { Pressable, Text } from "react-native";
import { LinkStyled } from './Link.styled';

export const Link = ({ children, ...props }) => {
  return (
    <Pressable>
      <LinkStyled>{children}</LinkStyled>
    </Pressable>
  );
};
