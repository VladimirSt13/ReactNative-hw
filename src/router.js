import Auth from "./Screens/auth/Auth";

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return <Auth />;
  }
  return <Home />;
};
