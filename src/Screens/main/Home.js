import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ButtonIcon } from "../../Components";
import { ButtonRound } from "../../Components";
import Grid from "../../img/icons/grid.svg";
import Plus from "../../img/icons/plus.svg";
import User from "../../img/icons/user.svg";
import LogOutIcon from "../../img/icons/logOut.svg";
import BackArrow from "../../img/icons/backArrow.svg";
import { CreatePost } from "./CreatePost";
import { PostsHome } from "./PostsHome";
import { Profile } from "./Profile";
import { Comments } from "./Comments";

const MainBottomTab = createBottomTabNavigator();
const Home = ({ navigation, route }) => {
  const handleLogout = () => {
    // код для реєстрації користувача
    navigation.navigate("Login");
  };

  const handleBack = () => {
    navigation.goBack();
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
        name="PostsHome"
        component={PostsHome}
        options={{
          title: "Публікації",
          headerRight: () => (
            <ButtonIcon
              icon={LogOutIcon}
              mr={16}
              size={24}
              onPress={handleLogout}
            />
          ),
          tabBarButton: ({ onPress }) => {
            console.log(navigation);
            return <ButtonIcon icon={Grid} size={40} onPress={onPress} />;
          },
          // tabBarVisible: navigation.state.index === 0,
          // tabBarVisible: navigation.dangerouslyGetState().index === 0,
        }}
      />
      <MainBottomTab.Screen
        name="CreatePost"
        component={CreatePost}
        // component={Comments}
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

          headerStyle: {},
          tabBarVisible: false,
          tabBarStyle: { display: "none" },
        }}
      />
      <MainBottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Профіль",
          headerLeft: () => (
            <ButtonIcon
              icon={BackArrow}
              ml={16}
              size={24}
              onPress={handleBack}
            />
          ),
          tabBarButton: ({ onPress, accessibilityLabel }) => (
            <ButtonIcon icon={User} size={40} onPress={onPress} />
          ),
          headerShown: false,
          // tabBarStyle: { display: "none" },
        }}
      />
    </MainBottomTab.Navigator>
  );
};

export default Home;
