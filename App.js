import { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, Button as ButtonRN } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Registration } from "./src/Screens/Auth/Registration";
import { Login } from "./src/Screens/Auth/Login";
import { Home } from "./src/Screens/Home";

SplashScreen.preventAutoHideAsync();

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
  });
};

const MainStack = createStackNavigator(); // вказівка на групу навігаторів

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await loadFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <View onLayout={onLayoutRootView}>
        <MainStack.Navigator initialRouteName="Login">
          <MainStack.Screen name="Registration" component={Registration} />
          <MainStack.Screen name="Login" component={Login} />
          <MainStack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Home screen",
              headerStyle: {
                backgroundColor: "#f4511e",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 20,
              },
              headerRight: () => (
                <ButtonRN
                  onPress={() => alert("This is a button!")}
                  title="Press me"
                  color="#fff"
                />
              ),
            }}
          />
        </MainStack.Navigator>
      </View>
    </NavigationContainer>
  );
}
