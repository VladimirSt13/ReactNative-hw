import { Feather, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import { ButtonIcon, ButtonRound } from "../../Components";
import BackArrow from "../../img/icons/backArrow.svg";
import LogOutIcon from "../../img/icons/logOut.svg";
import Plus from "../../img/icons/plus.svg";
import { CreatePost } from "./CreatePost";
import { PostsHome } from "./PostsHome";
import { Profile } from "./Profile/Profile";
import { useDispatch } from "react-redux";
import { authSignOutUser } from "../../redux/auth/authOperations";

const getTabBarVisible = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);

  if (routeName === "Comments" || routeName === "Map") {
    return { display: "none" };
  }
  return {
    height: 83,
    paddingTop: 16,
    alignItems: "center",
    justifyContent: "center",
  };
};

const getHeaderBarVisible = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);

  if (routeName === "Comments" || routeName === "Map") {
    return false;
  }

  return true;
};

const MainBottomTab = createBottomTabNavigator();

export const Home = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("clickLogout Home posts");
    dispatch(authSignOutUser());
  };

  const handleBack = () => {
    navigation.navigate("PostsHome");
  };
  return (
    <MainBottomTab.Navigator
      initialRouteName="Posts"
      // initialRouteName="CreatePost"
      screenOptions={({ route }) => ({
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
        activeTintColor: "#8B0000",
        inactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarStyle: getTabBarVisible(route),
        headerShown: getHeaderBarVisible(route),
      })}
    >
      <MainBottomTab.Screen
        name="PostsHome"
        component={PostsHome}
        options={({ route }) => ({
          title: "Публікації",
          headerRight: () => (
            <ButtonIcon
              icon={LogOutIcon}
              mr={16}
              size={24}
              onPress={handleLogout}
            />
          ),
          tabBarButton: ({ accessibilityState, onPress }) => {
            return (
              <Ionicons
                name="grid-outline"
                size={24}
                color={accessibilityState.selected ? "#ff6c00" : "#212121"}
                style={{ marginTop: 6 }}
                onPress={onPress}
              />
            );
          },
        })}
      />
      <MainBottomTab.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          title: "Створити пост",
          headerLeft: () => (
            <ButtonIcon
              icon={BackArrow}
              ml={16}
              size={24}
              onPress={handleBack}
            />
          ),
          tabBarButton: ({ onPress }) => (
            <ButtonRound
              icon={Plus}
              size={40}
              color={"#ff6c00"}
              onPress={onPress}
              ml={32}
              mr={32}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <MainBottomTab.Screen
        name="Profile"
        component={Profile}
        options={({ route }) => ({
          title: "Профіль",
          headerLeft: () => (
            <ButtonIcon
              icon={BackArrow}
              ml={16}
              size={24}
              onPress={handleBack}
            />
          ),
          tabBarButton: ({ accessibilityState, onPress }) => {
            return (
              <Feather
                name="user"
                size={24}
                color={accessibilityState.selected ? "#ff6c00" : "#212121"}
                style={{ marginTop: 6 }}
                onPress={onPress}
              />
            );
          },
          headerShown: false,
        })}
      />
    </MainBottomTab.Navigator>
  );
};
