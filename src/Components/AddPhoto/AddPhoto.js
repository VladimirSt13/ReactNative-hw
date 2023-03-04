import { useState } from "react";
import { StyleSheet } from "react-native";
import PhotoIcon from "../../img/icons/photo";
import {
  CameraStyled,
  MakePhoto,
  Photo,
  PhotoContainer,
  Text,
} from "./AddPhoto.styled";

export const AddPhoto = ({ handlePhoto }) => {
  const [photo, setPhoto] = useState(null);
  const [camera, setCamera] = useState(null);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
    handlePhoto(photo.uri);
  };

  return (
    <>
      <PhotoContainer>
        <CameraStyled ref={setCamera}>
          {photo && <Photo source={{ uri: photo }} />}
        </CameraStyled>
        <MakePhoto onPress={takePhoto}>
          <PhotoIcon width={24} height={24} />
        </MakePhoto>
      </PhotoContainer>
      <Text>{!photo ? "Завантажте фото" : "Редагувати фото"}</Text>
    </>
  );
};
