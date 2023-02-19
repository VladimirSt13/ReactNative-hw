import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "./Login";
import { Registration } from "./Registration";
import Home from "./../main/Home";

const AuthStack = createStackNavigator();

const Auth = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Registration" component={Registration} />
      <AuthStack.Screen name="Home" component={Home} />
    </AuthStack.Navigator>
  );
};

export default Auth;
