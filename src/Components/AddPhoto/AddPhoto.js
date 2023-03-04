import { Camera, CameraType, getCameraPermissionsAsync } from "expo-camera";
import React, { useEffect, useRef, useState } from "react";
import { Alert, Pressable } from "react-native";
import PhotoIcon from "../../img/icons/photo";

import {
  CameraStyled,
  MakePhoto,
  Photo,
  PhotoContainer,
  Text,
} from "./AddPhoto.styled";

export const AddPhoto = ({ photo, setPhoto }) => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef();

  const getPermissions = async () => {
    const cameraPermission = await getCameraPermissionsAsync();
    return cameraPermission.granted;
  };

  if (!getPermissions()) {
    return Alert.alert(
      "Permissions Required!",
      "You need to provide the permissions to access the camera",
      [{ text: "Got it" }]
    );
  }

  const takePhoto = async () => {
    console.log(
      "🚀 ~ file: AddPhoto.js:40 ~ takePhoto ~ takePhoto:",
      takePhoto
    );
    if (!cameraRef.current) return console.error("🚀 Camera error");

    const photo = await cameraRef?.current.takePictureAsync();
    setPhoto(photo.uri);
  };

  const handleChangePhoto = () => {
    if (photo) {
      setPhoto(null);
    }
  };

  return (
    <>
      <PhotoContainer>
        {photo ? (
          <Photo source={{ uri: photo }} />
        ) : (
          <CameraStyled ref={cameraRef}>
            <MakePhoto onPress={takePhoto}>
              <PhotoIcon width={24} height={24} />
            </MakePhoto>
          </CameraStyled>
        )}
      </PhotoContainer>
      <Pressable onPress={handleChangePhoto}>
        <Text>{!photo ? "Завантажте фото" : "Редагувати фото"}</Text>
      </Pressable>
    </>
  );
};
