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
  title: {
    textAlign: "center",
    fontSize: Font.HEADER,
    fontWeight: 700,
    padding: 10,
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
