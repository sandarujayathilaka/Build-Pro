import React from "react";
import { View, Text } from "react-native";
import RejectionDetailContainer from "../containerComponents/RejectionDetails"; 

export default function RejectionDetails(props) {
  const orderID = props.orderId;

  return (
    <View>
      <RejectionDetailContainer orderId={orderID} />
    </View>
  );
}
