import { Button, Text, View } from "react-native";
import { styles } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";

export default function ScanScreen() {
  const navigator = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ScanScreen</Text>
      <Button
        title="Go to Detail"
        onPress={() => {
          navigator.navigate("productDetails");
        }}
      />
    </View>
  );
}
