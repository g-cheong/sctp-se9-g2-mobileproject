import { Button, Text, View } from "react-native";
import { styles } from "../styles/styles";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function SettingsScreen() {
  const { logout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ScanScreen</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
