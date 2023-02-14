import { useState, useEffect, useCallback } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { NavigationContainer } from "@react-navigation/native";

import { useRoute } from "./src/router";

// SplashScreen.preventAutoHideAsync();

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
  });
};

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const routing = useRoute(true);

  useEffect(() => {
    async function prepare() {
      try {
        await loadFonts();
        console.log("fonts-loaded");
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    console.log(
      "🚀 ~ file: App.js:42 ~ onLayoutRootView ~ onLayoutRootView",
      appIsReady
    );

    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      {/* <View onLayout={onLayoutRootView}> */}
      {/* </View> */}
      {routing}
    </NavigationContainer>
  );
}
