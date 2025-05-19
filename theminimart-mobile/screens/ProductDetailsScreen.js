import { Text, View } from "react-native";
import { styles } from "../styles/styles";
import { useRoute } from "@react-navigation/native";

export default function ProductDetailsScreen() {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ProductDetailsScreen</Text>
      <Text style={styles.title}>Product ID: {route.params.id}</Text>
    </View>
  );
}
