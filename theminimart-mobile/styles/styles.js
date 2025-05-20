import { Dimensions, StyleSheet } from "react-native";
import { Font } from "./font";
import { Colors } from "./colors";

const windowWidth = Dimensions.get("window").width;

const Border = {
  RADIUS: 10,
  WIDTH: 1,
};

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
    justifyContent: "flex-start",
    alignItems: `center`,
    borderColor: Colors.BLACK,
    borderWidth: Border.WIDTH,
    borderRadius: Border.RADIUS,
    marginVertical: 5,
    width: `95%`,
  },
  productListScreenCardImage: {
    flex: 1,
    resizeMode: "contain",
  },
  productListScreenRow: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "nowrap",
    width: "100%",
    paddingVertical: 5,
  },
  productListScreenHeaderText: {
    fontWeight: Font.BOLD,
    width: "30%",
    flexShrink: 0,
  },
  productListScreenText: {
    flexShrink: 1,
    flexGrow: 1,
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth,
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
  primaryBtn: {
    alignItems: "center",
    backgroundColor: Colors.PRIMARY,
    borderRadius: Border.RADIUS,
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
    color: Colors.GREY,
    borderColor: Colors.BLACK,
    borderWidth: Border.WIDTH,
    borderRadius: Border.RADIUS,
    alignContent: `center`,
    alignItems: `center`,
    padding: 12,
    width: 300,
  },
  // textInput: {
  //   width: 300,
  //   padding: 12,
  //   borderWidth: 2,
  //   borderRadius: 10,
  //   borderColor: Colors.OFF_WHITE_DARK,
  // },
  dropdown: {
    fontSize: Font.TEXT1,
    width: `70%`,
    height: 50,
    borderWidth: Border.WIDTH,
    borderRadius: Border.RADIUS,
    borderColor: Colors.BLACK,
  },
  dropdownPlaceholder: {
    color: Colors.GREY,
    fontSize: Font.TEXT1,
  },
  productDetailsTitle: {
    textAlign: "center",
    fontSize: Font.TEXT2,
    fontWeight: 700,
    padding: 10,
  },
  productDetailsCategory: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: 600,
    padding: 5,
  },
  productDetailsDescriptionTitle: {
    textAlign: "flex-start",
    fontSize: 13,
    fontWeight: 600,
  },
  productDetailsDescription: {
    textAlign: "flex-start",
    fontSize: 13,
    fontWeight: 400,
  },
  productDetailsPrice: {
    textAlign: "center",
    fontSize: Font.TEXT2,
    fontWeight: 600,
    padding: 10,
  },
  productDetailsDescriptionView: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: Colors.OFF_WHITE_DARKER,
    borderRadius: 25,
    backgroundColor: Colors.BACKGROUND,
    alignItems: "stretch",
    width: "95%",
    maxHeight: "22%",
  },
  productDetailsQRCodeView: {
    width: 150,
    height: 150,
    padding: 8,
    marginTop: "5%",
    borderWidth: 1,
    borderColor: Colors.OFF_WHITE_DARKER,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  closeButton: {
    position: "absolute",
    bottom: "40%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    right: 0,
  },
  scanMoreView: {
    position: "absolute",
    bottom: "20%",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  loadingScreen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  imagePickerContainer: {
    height: 200,
    width: "70%",
    borderColor: Colors.GREY,
    borderWidth: Border.WIDTH,
    borderRadius: Border.RADIUS,
    justifyContent: "center",
    alignItems: "center",
  },
  imagePreview: {
    flex: 1,
    resizeMode: "contain",
    height: 200,
    width: "100%",
  },
  createProductScreenButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    width: "70%",
  },
});
