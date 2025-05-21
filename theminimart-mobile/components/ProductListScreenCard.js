import { Image, Text, View } from "react-native";
import { styles } from "../styles/styles";
import { Button } from "react-native-paper";
import { Colors } from "../styles/colors";
import { Font } from "../styles/font";

export default function ProductListScreenCard({data, navigation}) {
    if(!data) {
        return null;
    }

    return(
        <View style={{flexDirection: 'column', justifyContent: "center"}}>
            <View style={styles.productListScreenContainer}>
                <View style={styles.productListScreenCardLeftContainer}>
                    <Image style={styles.productListScreenCardImage} source={{uri: data.image}}/>
                    <View style={styles.productListScreenCardButtonContainer}>
                        <Button 
                            textColor={Colors.WHITE}
                            labelStyle={{fontSize:Font.TEXT3, fontWeight: Font.BOLD}}
                            onPress={() => {
                                navigation.navigate("productDetails", {id:data.id});
                            }}
                            > Details </Button>
                    </View>
                </View>
                <View style={styles.productListScreenCardRightContainer}>
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
        </View>
    );
};