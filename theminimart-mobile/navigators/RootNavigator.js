import AppStackNavigator from "./AppStackNavigator";
import AuthStackNavigator from "./AuthStackNavigator";

export default function RootNavigator() {
  // TODO: Implement AuthStack for login (Firhat)
  const isAuthenticated = true;

  // Choose to render loginScreen or AppScreen based on authentication
  return isAuthenticated ? <AppStackNavigator /> : <AuthStackNavigator />;
}
