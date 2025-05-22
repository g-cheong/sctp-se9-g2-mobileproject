import { ActivityIndicator, Alert, Image, Keyboard, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../styles/styles";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import { Font } from "../styles/font";
import { useCategories, useCreateProduct, useProducts } from "../constants/api";
import { Colors } from "../styles/colors";
import * as ImagePicker from "expo-image-picker";

export default function CreateProductScreen() {
  const formDefaults = {
    title: "",
    price: "",
    description: "",
    category: null,
    image: null,
  };
  const { categories, loadingCategories} = useCategories();
  const [formFields, setFormFields] = useState(formDefaults);
  const { createProduct, isCreating, createError} = useCreateProduct();
  const { data, setData, refetch} = useProducts();

  const submitForm = async () => {
    if(!formFields.title || !formFields.price || !formFields.description || !formFields.category || !formFields.image) {
      Alert.alert("Missing form information", "Please ensure all fields are filled/selected.");
    } else {
      setData( prevData =>  [...prevData, formFields]);
      try {
        const newProductFromServer = await createProduct(formFields);
        refetch();
        Alert.alert("Success", `Product "${newProductFromServer.title}" created successfully`);
        setFormFields(formDefaults);
      } catch(err) {
        Alert.alert("Error", "Failed to create product");
      }
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
      setFormFields({...formFields, image: result.assets[0].uri});
    }
  }

  if(loadingCategories || isCreating) {
    return ( 
      <View style={styles.loadingScreen}>
        <ActivityIndicator size="large" color={Colors.PRIMARY}/>
        <Text> {isCreating ? "Createing Product": "Loading Product Creation"} </Text>
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback style={styles.container} onPress={() => Keyboard.dismiss()}>
      <View style={[styles.createProductScreenContainer]}>
        <TextInput 
        style={styles.textInput} 
        placeholder="Title" 
        value={formFields.title}
        onChangeText={
          (text) => handleInputChange("title", text)
          }
        />
        <TextInput 
        style={styles.textInput} placeholder="Price" 
        value={formFields.price}
        keyboardType="numeric"
        onChangeText={
          (text) => {
            if(isNaN(text)) {
              text.replace(/[^0-9]/g, '');
              return;
            }; 
            handleInputChange("price", text)
          }
          }
        />
        <TextInput 
          style={styles.textInput} 
          placeholder="Description" 
          value={formFields.description}
          onChangeText={
            (text) => handleInputChange("description", text)
            }
        />
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
          {formFields.image 
            ? <Image source={{ uri: formFields.image}} style={styles.imagePreview}/> 
            : <Text styles={styles.imagePreview}> No image selected </Text>
          }
        </View>
        <View style={styles.createProductScreenButtonsContainer}>
          <View style={styles.createProductScreenButtonContainer}>
            <Button 
              textColor={Colors.WHITE}
              labelStyle={{fontSize:Font.TEXT3, fontWeight: Font.BOLD}}
              onPress={submitForm}
              > Submit </Button>
          </View>
          <View style={styles.createProductScreenButtonContainer}>
            <Button 
              textColor={Colors.WHITE}
              labelStyle={{fontSize:Font.TEXT3, fontWeight: Font.BOLD}}
              onPress={pickImage}
              > Pick Image </Button>
          </View>
          <View style={styles.createProductScreenButtonContainer}>
            <Button 
              textColor={Colors.WHITE}
              labelStyle={{fontSize:Font.TEXT3, fontWeight: Font.BOLD}}
              onPress={resetForm}
              > Reset Form </Button>
          </View>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}
