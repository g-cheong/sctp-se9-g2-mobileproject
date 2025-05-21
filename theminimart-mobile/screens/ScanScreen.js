import { useState, useCallback } from "react";
import { Button, View, Alert, StyleSheet } from "react-native";
import { styles } from "../styles/styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Platform } from "react-native";
 
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

  useFocusEffect(
    useCallback(() => {
      const resetScreen = () => {
        setScanned(false);
        setCameraVisible(false);
      };
      return resetScreen;
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.scanButtonView}>
        <Button title="Scan QR Code" onPress={scanQRHandler} />
      </View>
      {cameraVisible && (
        <View style={StyleSheet.absoluteFillObject}>
            <CameraView style={StyleSheet.absoluteFillObject}
            facing="back"
            onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}>
            </CameraView>

            {/* Overlay */}
        <View pointerEvents="none" style={styles.overlayContainer}>
          <View style={styles.overlayTop} />
          <View style={styles.overlayMiddle}>
              <View style={styles.overlaySide} />
              <View style={styles.scannerBox} />
              <View style={styles.overlaySide} />
          </View>
          <View style={styles.overlayBottom} />
        </View>
        
          <View style={styles.closeButton}>
            <Button title="Close Camera" onPress={() => setCameraVisible(false)} />
          </View>
        </View>
      )}
      
       {/* {scanned && cameraVisible && (
        <View style={styles.scanMoreView}>
          <Button title="Scan Again" onPress={() => setScanned(false)} />
        </View>
      )} */}
    </View>
  );
}
