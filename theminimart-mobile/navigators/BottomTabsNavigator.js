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
        options={{
          title: "Create Product",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="create-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="productListNavigator"
        component={ProductListNavigator}
        options={{
          title: "Product List",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="scanNavigator"
        component={ScanNavigator}
        options={{
          title: "Scan",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="qr-code-outline" size={size} color={color} />
          ),
        }}
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
