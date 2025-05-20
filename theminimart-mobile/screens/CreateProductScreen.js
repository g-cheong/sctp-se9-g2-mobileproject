import { ActivityIndicator, Alert, Button, Image, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import { Font } from "../styles/font";
import { useCategories, useProducts } from "../constants/api";
import { Colors } from "../styles/colors";
import * as ImagePicker from "expo-image-picker";

export default function CreateProductScreen() {
  const formDefaults = {
    title: "",
    price: "",
    description: "",
    category: null,
    productImage: null,
  };
  const { categories, loadingCategories} = useCategories();
  const [formFields, setFormFields] = useState(formDefaults);
  const {data, setData} = useProducts();

  const submitForm = () => {
    if(!formFields.title || !formFields.price || !formFields.description || !formFields.category || !formFields.productImage) {
      Alert.alert("Missing form information", "Please ensure all fields are filled/selected.");
    } else {
      setData( prevData =>  [...prevData, formFields]);
      setFormFields(formDefaults);
    }
  };

  const resetForm = () => {
    setFormFields(formDefaults);
  }

  const handleInputChange = (fieldName, value) => {
    setFormFields(prevFields => ({
      ...prevFields,
      [fieldName]: value,
    }));
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });

    if(!result.canceled) {
      setFormFields({...formFields, productImage: result.assets[0].uri});
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
      <TextInput style={styles.textInput} placeholder="Title" value={formFields.title} onChangeText={(text) => handleInputChange("title", text)}/>
      <TextInput style={styles.textInput} placeholder="Price" value={formFields.price} onChangeText={(text) => handleInputChange("price", text)}/>
      <TextInput style={styles.textInput} placeholder="Description" value={formFields.description} onChangeText={(text) => handleInputChange("description", text)}/>
      <Dropdown 
        style={styles.dropdown}
        placeholderStyle={styles.dropdownPlaceholder}
        selectedTextStyle={Font.TEXT1}
        search
        data={categories}
        value={formFields.category}
        labelField="label"
        valueField="value"
        placeholder="Select Item"
        onChange={ item => {
          handleInputChange("category", item.value);
        }}
      />
      <View style={styles.imagePickerContainer}>
        {formFields.productImage 
          ? <Image source={{ uri: formFields.productImage}} style={styles.imagePreview}/> 
          : <Text styles={styles.imagePreview}> No image selected </Text>
        }
      </View>
      <View style={styles.createProductScreenButtonsContainer}>
        <Button title="Submit" onPress={submitForm} />
        <Button title="Pick image" onPress={pickImage} />
        <Button title="Reset Form" onPress={resetForm} />
      </View>

    </View>
  );
}
