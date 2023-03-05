import { Camera, getCameraPermissionsAsync } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
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

export const AddPhoto = ({ photo, setPhoto, setLocation }) => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [errorMsg, setErrorMsg] = useState(null);
  const cameraRef = useRef();

  useEffect(() => {
    requestPermission();
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
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
      const location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);

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

  const handleLoadPhoto = async () => {
    console.log("handleLoadPhoto");
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
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
      <Pressable onPress={!photo ? handleLoadPhoto : handleChangePhoto}>
        <Text>{!photo ? "Завантажте фото" : "Редагувати фото"}</Text>
      </Pressable>
    </>
  );
};
