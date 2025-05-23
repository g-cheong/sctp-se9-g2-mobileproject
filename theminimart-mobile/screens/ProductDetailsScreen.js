import { useState, useEffect } from "react";
import axios from "axios";
import { Text, View, Alert, ScrollView, ActivityIndicator, Image } from "react-native";
import { styles } from "../styles/styles";
import { useRoute } from "@react-navigation/native";
import { API_URL } from "../constants/api";
import { Colors } from "../styles/colors";
import QRCode from 'react-native-qrcode-svg';

export default function ProductDetailsScreen() {
  const route = useRoute();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const productId = "/products/" + route.params.id;
  const appLogo = require("../assets/bluebag.png");
  const [imageError, setImageError] = useState(false);

  const getProduct = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(API_URL + productId);
      const singleProduct = response.data;
    
      if (singleProduct !== null && singleProduct !== undefined) {
        setProducts(singleProduct);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        Alert.alert("Error", "Product not found.");

      } else {
        Alert.alert("Error", "Failed to fetch product details.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [route.params.id]);

  if (isLoading) {
    return (
      <View style={styles.loadingScreen}>
        <ActivityIndicator size="large" color={Colors.PRIMARY} />
        <Text>Loading Product</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
    <View style={styles.productDetailsScreenContainer}>
        <View style={styles.productDetailsImageView}>
          {products.image && products.image != "" && !imageError ? (
            <Image
              source={{ uri: products.image }}
              style={styles.productDetailsImage}
              onError={() => setImageError(true)} 
            />
          ): (
            <Text style={styles.productDetailsTitle}>Image not available</Text>
          )}
        </View>
        <Text style={styles.productDetailsTitle}>Product Title: {products.title}</Text>
        <Text style={styles.productDetailsCategory}>Product Category: {products.category}</Text>
        <View style={styles.productDetailsDescriptionView}>
          <Text style={styles.productDetailsDescriptionTitle}>Product Description:</Text>
          <Text style={styles.productDetailsDescription}>{products.description}</Text>        
        </View>
     
      <Text style={styles.productDetailsPrice}>Product Price: {products.price}</Text>
      <View style={{ justifyContent: "flex-start" }}>
       { products!=null && products!=undefined &&  products.id > 0 &&
          <View style={styles.productDetailsQRCodeView}>
              <QRCode
                value={products.id}
                color="black"
                backgroundColor="white"
                logo={appLogo}
                logoBackgroundColor="transparent"
                logoSize={30}
                ecl="H"
                size={130}
              /> 
            </View> 
        }
        </View>
    </View>
  </ScrollView>
  
  );
}
