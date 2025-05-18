import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/styles";

export default function ProductListScreen() {
  const navigator = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ProductListScreen</Text>
      <Button
        title="Go to Detail"
        onPress={() => {
          navigator.navigate("productDetails", { id: 1 });
        }}
      />
    </View>
  );
}
