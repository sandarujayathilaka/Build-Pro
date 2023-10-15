import React from "react";
import { View, Text } from "react-native";
import RejectionDetailContainer from "../components/container/RejectionDetails"; 

export default function RejectionDetails(props) {
  const orderID = props.orderId;
  const deliveryObId = props.deliveryObId;

  return (
    <View>
      <RejectionDetailContainer orderId={orderID} deliveryObId={deliveryObId} />
    </View>
  );
}
