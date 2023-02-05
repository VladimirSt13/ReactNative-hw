import { ImageBackgroundStyled } from "./Wallpaper.styled.";

export const Wallpaper = ({ image, children }) => {
  console.log(image);
  return (
    <ImageBackgroundStyled source={image}>{children}</ImageBackgroundStyled>
  );
};
