import { ActivityIndicator, Alert, Button, Image, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import { Font } from "../styles/font";
import { useCategories, useProducts } from "../constants/api";
import { Colors } from "../styles/colors";
import * as ImagePicker from "expo-image-picker";

const data = [
  {label: 'Item1', value: 'Item1'},
  {label: 'Item2', value: 'Item2'},
  {label: 'Item3', value: 'Item3'},
  {label: 'Item4', value: 'Item4'},
];

export default function CreateProductScreen() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0.00);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(null);
  const [productImage, setProductImage] = useState(null);
  const { categories, loadingCategories, errorCategories} = useCategories();

  const submitForm = () => {
    if(!title || !price || !description || !category || !productImage) {
      Alert.alert("Missing form information", "Please ensure all fields are filled/selected.");
    } else {
      setTitle("");
      setPrice(0.00);
      setDescription("");
      setCategory(null);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });

    if(!result.canceled) {
      setProductImage(result.assets[0].uri);
    }
  }

  if(loadingCategories) {
    return ( 
      <View style={styles.loadingScreen}>
        <ActivityIndicator size="large" color={Colors.PRIMARY}/>
        <Text> Loading Product Creation </Text>
      </View>
    );
  }

  return (
    <View style={[styles.createProductScreenContainer, styles.container]}>
      <Text style={styles.title}>CreateProductScreen</Text>
      <TextInput style={styles.textInput} placeholder="Title" value={title} onChangeText={setTitle}/>
      <TextInput style={styles.textInput} placeholder="Price" value={price} onChangeText={setPrice}/>
      <TextInput style={styles.textInput} placeholder="Description" value={description} onChangeText={setDescription}/>
      <Dropdown 
        style={styles.dropdown}
        placeholderStyle={Font.TEXT1}
        selectedTextStyle={Font.TEXT1}
        search
        data={categories}
        value={category}
        labelField="label"
        valueField="value"
        placeholder="Select Item"
        onChange={ item => {
          setCategory(item.value)
        }}
      />
      <View style={styles.imagePickerContainer}>
        <Button title="Pick a product image from the photo gallery" onPress={pickImage} style={styles.imagePickerButton}/>
        {productImage && <Image source={{ uri: productImage}} style={styles.imagePreview}/>}
      </View>
      <Button title="Submit" onPress={submitForm}/>
    </View>
  );
}
