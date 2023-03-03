import { createStackNavigator } from "@react-navigation/stack";
import { Login, Registration } from "./Screens/auth";
import { Home } from "./Screens/main";

Home;

const AuthStack = createStackNavigator();

export const Starting = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Registration" component={Registration} />
      <AuthStack.Screen name="Home" component={Home} />
    </AuthStack.Navigator>
  );
};
