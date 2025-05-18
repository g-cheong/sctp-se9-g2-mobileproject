import AuthStackNavigator from "./AuthStackNavigator";
import BottomTabsNavigator from "./BottomTabsNavigator";

export default function RootNavigator() {
  // TODO: Implement AuthStack for login (Firhat)
  const isAuthenticated = true;

  // Choose to render loginScreen or AppScreen based on authentication
  return isAuthenticated ? <BottomTabsNavigator /> : <AuthStackNavigator />;
}
