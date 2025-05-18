import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import ScanScreen from "../screens/ScanScreen";
import { Colors } from "../styles/colors";

const Stack = createNativeStackNavigator();

const stackScreenOptions = {
  headerStyle: { backgroundColor: Colors.PRIMARY },
  headerTintColor: Colors.WHITE,
  contentStyle: { backgroundColor: Colors.OFF_WHITE_LIGHT },
};

export default function ScanNavigator() {
  // contains the ProductDetailsScreen and BottomTabsNavigator(CreateProductScreen,ProductListScreen,ScanScreen)
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen name="scanScreen" component={ScanScreen} />
      <Stack.Screen name="productDetails" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
}
