import { useState, useEffect } from "react";
import { Button, Text, View, Alert, Modal, StyleSheet } from "react-native";
import { styles } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { Camera, CameraView, useCameraPermissions, BarcodeScanningResult } from "expo-camera";
import { Platform } from "react-native";
/* import {
  launchCameraAsync,
  launchImageLibraryAsync,
  useCameraPermissions,
} from "expo-image-picker"; */
 
export default function ScanScreen() {
  const navigator = useNavigation();
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [cameraVisible, setCameraVisible] = useState(false);

  const checkCameraPermission = async () => {
    if (Platform.OS === "android") return true;

    // If permission is undetermined, we can request it
    if (cameraPermission.status === "undetermined") {
      const { granted } = await requestCameraPermission();

      // if user granted permission, granted = true
      return granted;
    }

    // If permission is denied, we can't request it
    if (cameraPermission.status === "denied") {
      Alert.alert(
        "Camera Permissions Denied",
        "Please enable camera permissions in your settings for this app."
      );

      return false;
    }

    // means that cameraPermission.status == "granted"
    return true;
  };

  const scanQRHandler = async () => {
    // Check whether permission is granted
    const permissionGranted = await checkCameraPermission();

    // if app has no permission to take photo, return
    if (!permissionGranted) return;

    // if permission is granted, open camera
    setCameraVisible(true);

    };

  const handleBarCodeScanned = ({data}) => {
    if (!scanned) {
      if (!data) {
        Alert.alert("No QR code found");
        return;
      }
      setScanned(true);
      setCameraVisible(false); // Close camera

      navigator.navigate("productDetails", { id: data });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan Product</Text>
      <Button title="Scan QR Code" onPress={scanQRHandler} />
      {cameraVisible && (
        <View style={StyleSheet.absoluteFillObject}>
            <CameraView style={StyleSheet.absoluteFillObject}
            facing="back"
            onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}>
            </CameraView>
        
          {/* <View style={[styles.closeButton, { position: 'absolute', top: 40, right: 20 }]}>
            <Button title="Close Camera" onPress={() => setCameraVisible(false)} />
          </View> */}
        </View>
      )}
      
       {scanned && cameraVisible && (
        <View style={styles.scanMoreView}>
          <Button title="Scan Again" onPress={() => setScanned(false)} />
        </View>
      )}
      

    </View>
  );
}
