import { useNavigation, useRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";
import { Text } from "react-native";
import { Comments } from "./Comments";
import { Map } from "./Map";
import { Posts } from "./Posts/Posts";
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
      screenOptions={{ headerShown: false }}
    >
      <PostsStack.Screen
        name="Posts"
        component={Posts}
        options={{
          tabBarStyle: { display: "none" },
        }}
      />
      <PostsStack.Screen name="Comments" component={Comments} />
      <PostsStack.Screen name="Map" component={Map} />
    </PostsStack.Navigator>
  );
};
