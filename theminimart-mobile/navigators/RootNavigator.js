import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import AuthStackNavigator from "./AuthStackNavigator";
import BottomTabsNavigator from "./BottomTabsNavigator";

export default function RootNavigator() {
  // TODO: Implement AuthStack for login (Firhat)
  const { isAuthenticated } = useContext(AuthContext);

  // Choose to render loginScreen or AppScreen based on authentication
  return isAuthenticated ? <BottomTabsNavigator /> : <AuthStackNavigator />;
}
