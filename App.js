import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";

import * as Font from "expo-font";

import { useRoute } from "./src/router";

SplashScreen.preventAutoHideAsync();

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Thin.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
  });
};

const App = () => {
  useEffect(() => {
    async function prepare() {
      try {
        await loadFonts();
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await SplashScreen.hideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);

  const routing = useRoute(false);

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default App;
