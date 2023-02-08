import { ImageBackgroundStyled } from "./Wallpaper.styled.";

export const Wallpaper = ({ image, children }) => {
  return (
    <ImageBackgroundStyled source={image}>{children}</ImageBackgroundStyled>
  );
};
