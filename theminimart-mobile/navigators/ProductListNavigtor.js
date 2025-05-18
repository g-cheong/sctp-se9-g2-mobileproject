import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import ProductListScreen from "../screens/ProductListScreen";

const Stack = createNativeStackNavigator();

export default function ProductListNavigator() {
  // contains the ProductDetailsScreen and BottomTabsNavigator(CreateProductScreen,ProductListScreen,ScanScreen)
  return (
    <Stack.Navigator>
      <Stack.Screen name="productListScreen" component={ProductListScreen} />
      <Stack.Screen name="productDetails" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
}
