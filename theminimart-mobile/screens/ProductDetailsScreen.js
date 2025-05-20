import { useState, useEffect } from "react";
import axios from "axios";
import { Text, View, Alert, ScrollView } from "react-native";
import { styles } from "../styles/styles";
import { useRoute } from "@react-navigation/native";
import QRCode from 'react-native-qrcode-svg';

const API_URL = "https://677be8e220824100c07b3800.mockapi.io/";

export default function ProductDetailsScreen() {
  const route = useRoute();
  const [products, setProducts] = useState([]);
  const productId = "/products/" + route.params.id;
  const qrLogo = require("../assets/bluebag.png");
  //const productId = "/products/" + 20;

  const getProduct = async () => {
    try {
      //setIsLoading(true);
      const response = await axios.get(API_URL + productId);
      const singleProduct = response.data;
    
      if (singleProduct !== null && singleProduct !== undefined) {
        setProducts(singleProduct);
        //setIsLoaded(true);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        Alert.alert("Error", "Product not found.");

      } else {
        Alert.alert("Error", "Failed to fetch product details.");
      }
      //console.error(error);
    } finally {
      //setIsLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [route.params.id]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Details</Text>
      <Text style={styles.productDetailsTitle}>Product Title: {products.title}</Text>
      <Text style={styles.productDetailsCategory}>Product Category: {products.category}</Text>
      <View style={styles.productDetailsDescriptionView}>
      <ScrollView style={{ flexGrow: 0 }}> 
        <Text style={styles.productDetailsDescriptionTitle}>Product Description:</Text>
        <Text style={styles.productDetailsDescription}>{products.description}</Text>
      </ScrollView>
      </View>
      <Text style={styles.productDetailsPrice}>Product Price: {products.price}</Text>
      <View style={{ justifyContent: "center" }}>
       { products!=null && products!=undefined &&  products.id > 0 &&
          <View style={styles.productDetailsQRCodeView}>
              <QRCode
                value={products.id}
                color="black"
                backgroundColor="white"
                logo={qrLogo}
                logoBackgroundColor="transparent"
                logoSize={30}
                ecl="H"
                size={130}
              /> 
            </View> 
        }
      </View>
    </View>
  );
}
