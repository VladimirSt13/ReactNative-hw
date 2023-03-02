import Auth from "./screens/auth/Auth";

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return <Auth />;
  }
  return <Home />;
};
