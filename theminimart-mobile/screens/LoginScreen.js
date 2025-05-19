import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import blueBagImg from "../assets/bluebag.png";
import Button from "../components/Button";

export default function LoginScreen() {
  const navigator = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        style={styles.container}
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <KeyboardAvoidingView
          style={styles.centerContainer}
          behavior="padding"
          keyboardVerticalOffset={50}>
          <Text style={styles.title}>The Mini Mart Admin</Text>
          <Image
            style={{
              width: 100,
              height: 100,
              marginBottom: 40,
              marginTop: 10,
            }}
            source={blueBagImg}
          />
          <View style={styles.loginContainer}>
            <TextInput style={styles.textInput} placeholder="Username" />
            <TextInput style={styles.textInput} placeholder="Password" />
            <Button
              btnStyle={styles.primaryBtn}
              textStyle={styles.primaryBtnText}
              title="Login"
              onPress={() => {
                // TODO: Login Logic
              }}
            />
            <Button
              btnStyle={[styles.tertiaryBtn, { marginTop: 20 }]}
              textStyle={styles.tertiaryBtnText}
              title="Dont have an account? Register Here"
              onPress={() => {
                navigator.navigate("register");
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}
