import { StyleSheet, Pressable, View, Image } from "react-native";
import icon from "../../img/add.png";
import { AddButton, Container, Icon } from "./Avatar.styled";

export const Avatar = (props) => {
  return (
    <Container>
      <AddButton>
        <Icon source={icon} />
      </AddButton>
    </Container>
  );
};
