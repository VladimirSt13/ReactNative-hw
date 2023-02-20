import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ButtonIcon } from "../../Components";
import { ButtonPlus } from "./../../Components/Buttons/ButtonPlus/ButtonPlus";
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
        //=================================
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
          // justifyContent: "center",
          // alignItems: "flex-start",
          height: 83,
          paddingTop: 0,
          paddingBottom: 0,
          // elevation: 1,
          // backgroundColor: "#fff",
          // shadowColor: "#000",
          // shadowOpacity: 0.3,
          // shadowOffset: { width: 0, height: -0.5 },
          // shadowRadius: 1,
          // showLabel: false,
        },
      }}
    >
      <MainBottomTab.Screen
        name="Posts"
        component={Posts}
        options={{
          title: "Публікації",
          tabBarIcon: ({ focused, size, color }) => (
            <ButtonIcon
              icon={Grid}
              size={40}
              // onPress={signOut}
            />
          ),
        }}
      />
      <MainBottomTab.Screen
        name="CreatePosts"
        component={CreatePosts}
        options={{
          title: "Публікації",
          tabBarIcon: ({ focused, size, color }) => (
            <ButtonIcon
              icon={Grid}
              size={40}
              // onPress={signOut}
            />
          ),
        }}
      />
      <MainBottomTab.Screen name="Profile" component={Profile} />
    </MainBottomTab.Navigator>
  );
};

export default Home;
