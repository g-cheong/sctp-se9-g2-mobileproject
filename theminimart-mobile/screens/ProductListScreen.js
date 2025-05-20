import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  Text,
  View,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { styles } from "../styles/styles";
import ProductListScreenCard from "../components/ProductListScreenCard";
import { Colors } from "../styles/colors";
import { useProducts } from "../constants/api";
import { useCallback, useState } from "react";

// TODO: make improvements, maybe allow user to sort by categories, search by price

export default function ProductListScreen() {
  const navigation = useNavigation();
  const {data, loading, error} = useProducts();
  const [isRefreshing, setIsRefreshing] = useState(true);
  
  useFocusEffect(
    useCallback(() => {}, [data])
  );

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 500);
  }, []);

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
      <FlatList
        data={data}
        renderItem={productListScreenCard}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={() => null}
        onRefresh={handleRefresh}
        refreshing={isRefreshing || loading}
        extraData={data}
      />
    </View>
  );
}
