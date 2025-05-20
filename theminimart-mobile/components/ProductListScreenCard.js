import { Button, Image, Text, View } from "react-native";
import { styles } from "../styles/styles";

export default function ProductListScreenCard({data, navigation}) {
    if(!data) {
        return null;
    }

    return(
        <View style={styles.productListScreenContainer}>
            <View style={{width: "30%", aspectRatio: 1, padding: 5}}>
                <Image style={styles.productListScreenCardImage} source={{uri: data.image}}/>
                <Button
                    title="Go to Detail"
                    onPress={() => {
                    navigation.navigate("productDetails", {id:data.id});
                    }}
                />
            </View>
            <View style={{justifyContent: "space-evenly", flexDirection: "column", flexWrap: "wrap", width: "70%", gap: 1}}>
                <View style={styles.productListScreenRow}>
                    <Text style={styles.productListScreenHeaderText}> Title: </Text>
                    <Text style={styles.productListScreenText}> {data.title} </Text>
                </View>
                <View style={styles.productListScreenRow}>
                    <Text style={styles.productListScreenHeaderText}> Price:</Text>
                    <Text style={styles.productListScreenText}> {"$" + data.price}</Text>
                </View>
                <View style={styles.productListScreenRow}>
                    <Text style={styles.productListScreenHeaderText}> Category: </Text>
                    <Text style={styles.productListScreenText}> {data.category} </Text>
                </View>
            </View>
        </View>
    );
};