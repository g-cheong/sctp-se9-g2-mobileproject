import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreateProductScreen from "../screens/CreateProductScreen";
import ProductListNavigator from "./ProductListNavigtor";
import ScanNavigator from "./ScanNavigator";
import SettingsScreen from "../screens/SettingsScreen";
import { Colors } from "../styles/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const TabScreenOptions = {
  headerStyle: { backgroundColor: Colors.PRIMARY },
  headerTintColor: Colors.WHITE,
  tabBarActiveTintColor: Colors.WHITE,
  tabBarInactiveTintColor: Colors.OFF_WHITE_DARKER,
  sceneStyle: { backgroundColor: Colors.OFF_WHITE_LIGHT },
  tabBarStyle: { backgroundColor: Colors.PRIMARY },
};

export default function BottomTabsNavigator() {
  return (
    <Tab.Navigator screenOptions={TabScreenOptions}>
      <Tab.Screen
        name="createProduct"
        component={CreateProductScreen}
        options={{ title: "Create Product" }}
      />
      <Tab.Screen
        name="productListNavigator"
        component={ProductListNavigator}
        options={{ title: "Product List", headerShown: false }}
      />
      <Tab.Screen
        name="scanNavigator"
        component={ScanNavigator}
        options={{ title: "Scan", headerShown: false }}
      />
      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
