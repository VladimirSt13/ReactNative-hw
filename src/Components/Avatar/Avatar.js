import { useState } from "react";
import { Button, Container, AvatarImage } from "./Avatar.styled";
import { loadImage } from "./../helpers/loadImage";
import { Ionicons } from "@expo/vector-icons";

export const Avatar = (props) => {
  const [avatar, setAvatar] = useState(null);

  const handleLoadAvatar = () => {
    loadImage(setAvatar);
  };
  const handleRemoveAvatar = () => {
    setAvatar(null);
  };

  return (
    <Container>
      {avatar && <AvatarImage source={{ uri: avatar }} />}
      <Button onPress={avatar ? handleRemoveAvatar : handleLoadAvatar}>
        {avatar ? (
          <Ionicons
            name="ios-remove-circle-outline"
            size={24}
            color="#E8E8E8"
          />
        ) : (
          <Ionicons name="add-circle-outline" size={24} color="#FF6C00" />
        )}
      </Button>
    </Container>
  );
};
