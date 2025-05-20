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
import { Colors } from "../styles/colors";
import { useProducts } from "../constants/api";

// TODO: make improvements, maybe allow user to sort by categories, search by price

export default function ProductListScreen() {
  const navigation = useNavigation();
  const {data, loading, error} = useProducts();
  
  if (loading) {
    return (
        <View style={styles.loadingScreen}>
          <ActivityIndicator size="large" color={Colors.PRIMARY} />
          <Text>  Loading Product List</Text>
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
