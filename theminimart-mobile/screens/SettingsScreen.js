import { Button, Text, View } from "react-native";
import { styles } from "../styles/styles";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ScanScreen</Text>
      <Button
        title="Logout"
        onPress={() => {
          logOut();
        }}
      />
    </View>
  );
}
