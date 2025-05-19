import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigators/RootNavigator";
import { AuthProvider } from "./context/AuthContext";
import { StatusBar } from "expo-status-bar";

export default function App() {
  // TODO: Add AuthProvider and Container for navigation
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
