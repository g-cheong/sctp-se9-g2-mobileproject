import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import ProductListScreen from "../screens/ProductListScreen";
import { Colors } from "../styles/colors";

const Stack = createNativeStackNavigator();

export default function ProductListNavigator() {
  // contains the ProductDetailsScreen and BottomTabsNavigator(CreateProductScreen,ProductListScreen,ScanScreen)
  return (
    <Stack.Navigator>
      <Stack.Screen name="productListScreen" component={ProductListScreen} options={{ title: "Products List", headerShown: false}} />
      <Stack.Screen name="productDetails" component={ProductDetailsScreen} options={{ title: "Product Details", headerShown: false }} />
    </Stack.Navigator>
  );
}
