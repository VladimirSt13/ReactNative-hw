import { createStackNavigator } from "@react-navigation/stack";
import { Login, Registration } from "../Screens/Auth";

import { Home } from "../Screens/main";

const AuthStack = createStackNavigator();

export const Starting = ({ isAuth }) => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      // initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      {!isAuth ? (
        <>
          <AuthStack.Screen name="Login" component={Login} />
          <AuthStack.Screen name="Registration" component={Registration} />
        </>
      ) : (
        <AuthStack.Screen name="Home" component={Home} />
      )}
    </AuthStack.Navigator>
  );
};
