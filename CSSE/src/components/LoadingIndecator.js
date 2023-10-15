import React from "react";
import { View, ActivityIndicator } from "react-native";
import { styles } from "../styles/LodingIndecatorStyles";

const LoadingIndicator = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#3498db" />
    </View>
  );
};



export default LoadingIndicator;
