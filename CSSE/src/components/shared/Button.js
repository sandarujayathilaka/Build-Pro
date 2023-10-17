import React from "react";
import { TouchableOpacity, Text} from "react-native";

function ActionButton({ text, onPress, buttonStyle, textStyle }) {
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
}

export default ActionButton;
