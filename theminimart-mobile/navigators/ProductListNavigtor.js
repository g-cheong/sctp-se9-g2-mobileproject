import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import ProductListScreen from "../screens/ProductListScreen";
import { Colors } from "../styles/colors";

const Stack = createNativeStackNavigator();

export default function ProductListNavigator() {
  // contains the ProductDetailsScreen and BottomTabsNavigator(CreateProductScreen,ProductListScreen,ScanScreen)
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.PRIMARY },
        headerTintColor: Colors.WHITE,
        contentStyle: { backgroundColor: Colors.OFF_WHITE_LIGHT },
      }}>
      <Stack.Screen name="productListScreen" component={ProductListScreen} />
      <Stack.Screen name="productDetails" component={ProductDetailsScreen} options={{ title: "Product Details" }} />
    </Stack.Navigator>
  );
}
