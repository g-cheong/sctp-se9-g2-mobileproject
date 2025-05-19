// TODO: add buttons for navigating between the pages

import { Text, TouchableOpacity } from "react-native";

export default function Button({ btnStyle, textStyle, title, onPress }) {
  return (
    <TouchableOpacity style={btnStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}
