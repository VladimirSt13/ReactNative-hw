import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { Main } from './src/Components/Main';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.hideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsAppReady(true);
      }
    }

    prepare();
  }, []);

  if (!isAppReady || !fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
