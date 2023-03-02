import { useNavigation, useRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";
import { Text } from "react-native";
import { Comments, Map, Posts } from "./nestedPosts";
Text;

const PostsStack = createStackNavigator();

export const PostsHome = () => {
  const { params } = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.navigate("Posts");
  }, [params]);

  return (
    <PostsStack.Navigator
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
      }}
    >
      <PostsStack.Screen
        name="Posts"
        component={Posts}
        options={{
          tabBarStyle: { display: "none" },
          headerShown: false,
        }}
      />
      <PostsStack.Screen name="Comments" component={Comments} />
      <PostsStack.Screen name="Map" component={Map} />
    </PostsStack.Navigator>
  );
};
