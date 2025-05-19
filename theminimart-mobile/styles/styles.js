import { StyleSheet, ScrollView } from "react-native";
import { Colors } from "./colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: 700,
    padding: 10,
  },
  productDetailsTitle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: 700,
    padding: 10,
  },
  productDetailsDescription: {
    textAlign: "flex-start",
    fontSize: 12,
    fontWeight: 400,
  },
  productDetailsPrice: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: 600,
    padding: 10,
  },
  productDetailsDescriptionView: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    backgroundColor: Colors.BACKGROUND,
    alignItems: "stretch",
    width: "95%",
    maxHeight: "30%",
    
  },
  productDetailsQRCodeView: {
    width: 120,
    height: 120,
    padding: 8,
    marginTop: "20%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 8,
    padding: 10,
  },
  scanMoreView: {
    position: 'absolute',
    bottom: "30%",
    left: 0,
    right: 0,
    alignItems: "center",
  },
});
