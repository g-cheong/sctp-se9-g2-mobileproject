import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreateProductScreen from "../screens/CreateProductScreen";
import ProductListNavigator from "./ProductListNavigtor";
import ScanNavigator from "./ScanNavigator";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="createProduct" component={CreateProductScreen} />
      <Tab.Screen
        name="productListNavigator"
        component={ProductListNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="scanNavigator"
        component={ScanNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{ title: "Settings" }}
      />
    </Tab.Navigator>
  );
}
