import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Posts } from "./Posts";
import { Comments } from "./Comments";
import { Map } from "./Map";
import { Text, View } from "react-native";
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
