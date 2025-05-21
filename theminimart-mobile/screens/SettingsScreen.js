import { View } from "react-native";
import { styles } from "../styles/styles";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Button from "../components/Button";

export default function SettingsScreen() {
  const { logout } = useContext(AuthContext);
  return (
    <View style={styles.centerContainer}>
      <Button
        title="Logout"
        btnStyle={styles.primaryBtn}
        textStyle={styles.primaryBtnText}
        onPress={logout}
      />
    </View>
  );
}
