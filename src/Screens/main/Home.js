import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LogOutIcon from "../../img/Home/logOut";

import { CreatePosts } from "./CreatePosts";
import { Posts } from "./PostsDefault";
import { Profile } from "./Profile";
import { ButtonIcon } from "../../Components";

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
      }}
    >
      <MainBottomTab.Screen
        name="Posts"
        component={Posts}
        options={{
          title: "Публікації",
        }}
      />
      <MainBottomTab.Screen name="CreatePosts" component={CreatePosts} />
      <MainBottomTab.Screen name="Profile" component={Profile} />
    </MainBottomTab.Navigator>
  );
};

export default Home;
