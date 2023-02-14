import { createStackNavigator } from "@react-navigation/stack";
import { Registration } from "./screens/auth/Registration";
import { Login } from "./screens/auth/Login";
import { Posts } from "./screens/main/PostsDefault";
import { Profile } from "./screens/main/Profile";
import { CreatePosts } from "./screens/main/CreatePosts";
import { Text, TouchableOpacity, View } from "react-native";

import LogOutIcon from "./img/Home/logOut.svg";
// import UserIcon from "./img/Home/user.svg";

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Registration" component={Registration} />
      </AuthStack.Navigator>
    );
  }

  return (
    <MainStack.Navigator
      initialRouteName="Posts"
      screenOptions={{
        headerStyle: {
          height: 88,
          borderBottomColor: "rgba(0, 0, 0, 0.3)",
          borderBottomWidth: 1,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "Roboto-Medium",
          fontSize: 17,
          color: "#212121",
        },
        headerRight: () => (
          <TouchableOpacity
            activeOpacity={0.6}
            style={{ marginRight: 20 }}
            // onPress={signOut}
          >
            <LogOutIcon width={24} height={24} />
          </TouchableOpacity>
        ),
      }}
    >
      <MainStack.Screen
        name="Posts"
        component={Posts}
        options={{
          title: "Публікації",
        }}
      />
      <MainStack.Screen name="CreatePosts" component={CreatePosts} />
      <MainStack.Screen name="Profile" component={Profile} />
    </MainStack.Navigator>
  );
};
