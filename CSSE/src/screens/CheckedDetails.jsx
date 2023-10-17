import React from "react";
import { View } from "react-native";
import CheckedDetailsContainer from "../components/container/CheckedDetails"; 

export default function CheckedDetails(props) {
  const orderID = props.orderId;
  const deliveryObId = props.deliveryObId;

  return (
    <View>
      <CheckedDetailsContainer orderId={orderID} deliveryObId={deliveryObId} />
    </View>
  );
}
