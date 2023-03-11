import { Camera, getCameraPermissionsAsync } from "expo-camera";
import React, { useEffect, useRef, useState } from "react";
import { Alert, Pressable } from "react-native";
import PhotoIcon from "../../img/icons/photo";
import { loadImage } from "../helpers/loadImage";

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

  useEffect(() => {
    requestPermission();
  }, []);

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
    if (!cameraRef.current) {
      return console.error("🚀 Camera error");
    }

    try {
      const photo = await cameraRef?.current.takePictureAsync();
      setPhoto(photo.uri);
    } catch (error) {
      console.log(
        "🚀 ~ file: AddPhoto.js:56 ~ takePhoto ~ error:",
        error.message
      );
      if (error.message === "Camera is not running") {
        cameraRef.current.resumePreview();
      }
    }
  };

  const handleChangePhoto = () => {
    if (photo) {
      setPhoto(null);
    }
  };

  const handleLoadPhoto = () => {
    loadImage(setPhoto);
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
      <Pressable onPress={!photo ? handleLoadPhoto : handleChangePhoto}>
        <Text>{!photo ? "Завантажте фото" : "Редагувати фото"}</Text>
      </Pressable>
    </>
  );
};
