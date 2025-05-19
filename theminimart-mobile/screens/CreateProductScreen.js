import { Alert, Button, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import { Font } from "../styles/font";

const data = [
  {label: 'Item1', value: 'Item1'},
  {label: 'Item2', value: 'Item2'},
  {label: 'Item3', value: 'Item3'},
  {label: 'Item4', value: 'Item4'},
];

// TODO: need to complete the form submission to make a call to POST to server

export default function CreateProductScreen() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0.00);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(null);

  const submitForm = () => {
    Alert.alert("Mock form submission", "This is a mock form submission");
  };

  return (
    <View style={[styles.createProductScreenContainer, styles.container]}>
      <Text style={styles.title}>CreateProductScreen</Text>
      <TextInput style={styles.textInput} placeholder="Title"/>
      <TextInput style={styles.textInput} placeholder="Price"/>
      <TextInput style={styles.textInput} placeholder="Description"/>
      <Dropdown 
        style={styles.dropdown}
        placeholderStyle={Font.TEXT1}
        selectedTextStyle={Font.TEXT1}
        data={data}
        value={category}
        labelField="label"
        valueField="value"
        placeholder="Select Item"
        onChange={ item => {
          setCategory(item.value)
        }}
      />
      <Button title="Submit" onPress={submitForm}/>
      {/* Should use possibly a dropdown menu? */}
      {/* <TextInput placeholder="ProductCategory"/> */}
      {/* Requires an image uploader? */}
      {/* <TextInput placeholder="ProductImage"/> */}
    </View>
  );
}
