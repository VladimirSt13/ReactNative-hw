import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ButtonIcon } from "../../Components";
import { ButtonPlus } from "../../Components";
import Grid from "../../img/Home/grid.svg";
import Plus from "../../img/Home/plus.svg";
import User from "../../img/Home/user.svg";
import LogOutIcon from "../../img/Home/logOut";

import { CreatePosts } from "./CreatePosts";
import { Posts } from "./PostsDefault";
import { Profile } from "./Profile";

const MainBottomTab = createBottomTabNavigator();
const Home = ({ navigation, route }) => {
  const handleLogout = () => {
    // код для реєстрації користувача
    navigation.navigate("Login");
  };
  return (
    <MainBottomTab.Navigator
      initialRouteName="Posts"
      screenOptions={{
        tabBarHideOnKeyboard: true,
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
          <ButtonIcon
            icon={LogOutIcon}
            mr={16}
            size={24}
            onPress={handleLogout}
          />
        ),
        //=================================
        activeTintColor: "#8B0000",
        inactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 83,
          paddingTop: 16,
          alignItems: "center",
        },
      }}
    >
      <MainBottomTab.Screen
        name="Posts"
        component={Posts}
        options={{
          title: "Публікації",
          tabBarButton: ({ onPress, accessibilityLabel }) => (
            <ButtonIcon icon={Grid} size={40} onPress={onPress} />
          ),
        }}
      />
      <MainBottomTab.Screen
        name="CreatePosts"
        component={CreatePosts}
        options={{
          title: "Створити пост",
          tabBarButton: ({ onPress, accessibilityLabel }) => (
            <ButtonPlus icon={Plus} size={40} onPress={onPress} />
          ),
        }}
      />
      <MainBottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Профіль",
          tabBarButton: ({ onPress, accessibilityLabel }) => (
            <ButtonIcon icon={User} size={40} onPress={onPress} />
          ),
        }}
      />
    </MainBottomTab.Navigator>
  );
};

export default Home;
