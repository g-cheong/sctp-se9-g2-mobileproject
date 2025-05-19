import { StyleSheet } from "react-native";
import { Colors } from "./color";
import { Font } from "./font";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: `center`,
  },
  createProductScreenContainer: {
    justifyContent: `space-evenly`,
    alignItems: `center`,
  },
  productListScreenContainer: {
    flexDirection: `row`,
    flexGrow: 1,
    flexWrap: `wrap`,
    justifyContent: `space-evenly`,
    alignItems: `center`,
    borderColor: Colors.BLACK,
    borderWidth: 1,
    marginVertical: 5,
    width: `95%`,
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: Font.HEADER,
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
  textInput: {
    height: 50,
    fontSize: Font.TEXT1,
    borderColor: Colors.BLACK,
    borderWidth: 1,
    alignContent: `center`,
    alignItems: `center`,
    // textAlign: `center`,
    // textAlignVertical: `center`,
    width: `70%`,
  },
  dropdown: {
    fontSize: Font.TEXT1,
    width: `70%`,
    height: 50,
    borderWidth: 1, 
    borderColor: Colors.BLACK,
  },
  textInput: {
    height: 50,
    fontSize: Font.TEXT1,
    borderColor: Colors.BLACK,
    borderWidth: 1,
    alignContent: `center`,
    alignItems: `center`,
    // textAlign: `center`,
    // textAlignVertical: `center`,
    width: `70%`,
  },
  dropdown: {
    fontSize: Font.TEXT1,
    width: `70%`,
    height: 50,
    borderWidth: 1, 
    borderColor: Colors.BLACK,
  },
});
