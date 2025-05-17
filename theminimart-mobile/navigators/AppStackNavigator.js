import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabsNavigator from "./BottomTabsNavigator";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";

const Stack = createNativeStackNavigator();

export default function AppStackNavigator() {
  // contains the ProductDetailsScreen and BottomTabsNavigator(CreateProductScreen,ProductListScreen,ScanScreen)
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="bottomTabsNavigator"
        component={BottomTabsNavigator}
        options={{
          // Hide the header
          headerShown: false,
        }}
      />
      <Stack.Screen name="productDetails" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
}
