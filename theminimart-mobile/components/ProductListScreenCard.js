import { Button, Image, Text, View } from "react-native";
import { styles } from "../styles/styles";

export default function ProductListScreenCard({data, navigation}) {
    if(!data) {
        return null;
    }

    return(
        <View style={styles.productListScreenContainer}>
            <View style={{width: "30%", aspectRatio: 1}}>
            <Image style={styles.productListScreenCardImage} source={{uri: data.image}}/>
            <Button
                title="Go to Detail"
                onPress={() => {
                navigation.navigate("productDetails", {id:data.id});
                }}
            />
            </View>
            <View style={{justifyContent: "space-evenly", flexDirection: "column", flexWrap: "wrap", width: "70%", gap: 2}}>
            <Text style={{flexWrap: "wrap", width: "95%"}}> Title: {data.title} </Text>
            <Text> Price: ${data.price} </Text>
            <Text> Category: {data.category} </Text>
            </View>
        </View>
    );
};