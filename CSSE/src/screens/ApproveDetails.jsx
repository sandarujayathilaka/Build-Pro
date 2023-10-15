import { View, Text } from 'react-native'
import React from 'react'
import RejectionDetailContainer from "../components/container/RejectionDetails"; 

export default function ApproveDetails(props) {
    const orderID = props.orderId;
    const deliveryObId = props.deliveryObId;
  return (
    <View>
      <RejectionDetailContainer orderId={orderID} deliveryObId={deliveryObId} />
    </View>
  );
}