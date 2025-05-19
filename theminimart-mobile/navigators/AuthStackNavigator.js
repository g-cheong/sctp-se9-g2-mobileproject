import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { Colors } from "../styles/colors";

const Stack = createNativeStackNavigator();

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.PRIMARY },
        headerTintColor: Colors.WHITE,
        contentStyle: { backgroundColor: Colors.OFF_WHITE_LIGHT },
      }}>
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{ title: "Login" }}
      />
      <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={{ title: "Register" }}
      />
    </Stack.Navigator>
  );
}
