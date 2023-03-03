import { useState } from "react";
import { Photo, PhotoContainer, MakePhoto, Text } from "./AddPhoto.styled";
import PhotoIcon from "../../img/icons/photo";

export const AddPhoto = () => {
  const [photo, setPhoto] = useState(null);

  const handlePhoto = () => {
    if (!photo) {
      return setPhoto({
        uri: "https://kraina-ua.com/up/temp/20191211133441.jpg",
      });
    }
    return setPhoto(null);
  };
  return (
    <>
      <PhotoContainer>
        <Photo source={photo} />
        <MakePhoto onPress={handlePhoto}>
          <PhotoIcon width={24} height={24} />
        </MakePhoto>
      </PhotoContainer>
      <Text>{!photo ? "Завантажте фото" : "Редагувати фото"}</Text>
    </>
  );
};
