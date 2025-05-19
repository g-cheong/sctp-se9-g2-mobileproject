import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/styles";
import ProductListScreenCard from "../components/ProductListScreenCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Colors } from "../styles/colors";

// TODO: make improvements, maybe allow user to sort by categories, search by price

export default function ProductListScreen() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiUrl = "https://677be8e220824100c07b3800.mockapi.io/products";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(apiUrl);
        console.log("API response:", response.data);
        setData(response.data);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color={Colors.PRIMARY} />
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>{error.messsage}</Text>
      </View>
    );
  }

  const productListScreenCard = ({ item }) => (
    <ProductListScreenCard key={item.id} data={item} navigation={navigation} />
  );
  const keyExtractor = (item) => item.id;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ProductListScreen</Text>
      <FlatList
        data={data}
        renderItem={productListScreenCard}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={() => null}
      />
    </View>
  );
}
