import { StyleSheet } from "react-native";
import { Colors } from "./colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: 700,
    padding: 5,
  },
  loginContainer: {
    marginTop: 10,
    gap: 20,
    justifyContent: "center",
  },
  textInput: {
    width: 300,
    padding: 12,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.OFF_WHITE_DARK,
  },
  primaryBtn: {
    alignItems: "center",
    backgroundColor: Colors.PRIMARY,
    borderRadius: 10,
  },
  primaryBtnText: {
    color: Colors.WHITE,
    padding: 10,
    fontSize: 18,
  },
  tertiaryBtn: {
    alignItems: "center",
  },
  tertiaryBtnText: {
    alignItems: "center",
    color: Colors.GREY,
  },
});
