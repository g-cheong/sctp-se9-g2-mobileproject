import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import CreateProductScreen from "../screens/CreateProductScreen";
import ProductListScreen from "../screens/ProductListScreen";
import ScanScreen from "../screens/ScanScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="createProduct" component={CreateProductScreen} />
      <Tab.Screen name="productList" component={ProductListScreen} />
      <Tab.Screen name="scan" component={ScanScreen} />
    </Tab.Navigator>
  );
}
