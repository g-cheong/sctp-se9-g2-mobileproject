import { Text, View } from "react-native";
import { styles } from "../styles/styles";

export default function AuthStackNavigator() {
  return (
    <View style={(styles.container, { marginTop: 60 })}>
      <Text style={styles.title}>AuthStackNavigator</Text>
    </View>
  );
}
