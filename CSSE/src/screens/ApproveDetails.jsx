import { View} from 'react-native'
import React from 'react'
import CheckedDetailsContainer from "../components/container/CheckedDetails"; 

export default function ApproveDetails(props) {
    const orderID = props.orderId;
    const deliveryObId = props.deliveryObId;
  return (
    <View>
      <CheckedDetailsContainer orderId={orderID} deliveryObId={deliveryObId} />
    </View>
  );
}