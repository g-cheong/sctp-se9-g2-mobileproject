import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigators/RootNavigator";

export default function App() {
  // TODO: Add AuthProvider and Container for navigation
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
