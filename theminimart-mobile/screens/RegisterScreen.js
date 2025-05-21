import {
  Alert,
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
import { API_URL } from "../constants/api";
import { useState } from "react";
import axios from "axios";

export default function RegisterScreen() {
  const navigator = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const registerHandler = async (username, password) => {
    try {
      console.log(username);
      console.log(password);
      const res = await axios.post(`${API_URL}users`, {
        username,
        password,
      });
      console.log(res);
      Alert.alert("Registration Successful", "Redirecting to Login...");
      navigator.goBack();
    } catch (e) {
      Alert.alert(
        "Registration Error",
        "Something went wrong with the registration. Try again later."
      );
      console.log(e);
    }
  };
  return (
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
          <TextInput
            style={styles.authTextInput}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.authTextInput}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button
            btnStyle={styles.primaryBtn}
            textStyle={styles.primaryBtnText}
            title="Register"
            onPress={() => {
              registerHandler(username, password);
            }}
          />
          <Button
            btnStyle={[styles.tertiaryBtn, { marginTop: 20 }]}
            textStyle={styles.tertiaryBtnText}
            title="Have an account? Login Here"
            onPress={() => {
              navigator.goBack();
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
