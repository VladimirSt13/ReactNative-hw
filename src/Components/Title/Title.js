import { Text, StyleSheet } from "react-native";
import { TitleStyled } from './Title.styled';

export const Title = ({keyboardStatus, children}) => {
  return <TitleStyled keyboardStatus={keyboardStatus}>{children}</TitleStyled>;
};

