import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import ScanScreen from "../screens/ScanScreen";

const Stack = createNativeStackNavigator();

export default function ScanNavigator() {
  // contains the ProductDetailsScreen and BottomTabsNavigator(CreateProductScreen,ProductListScreen,ScanScreen)
  return (
    <Stack.Navigator>
      <Stack.Screen name="scanScreen" component={ScanScreen} />
      <Stack.Screen name="productDetails" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
}
