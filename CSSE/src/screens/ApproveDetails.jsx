import { View, Text } from 'react-native'
import React from 'react'
import RejectionDetailContainer from "../containerComponents/RejectionDetails"; 

export default function ApproveDetails(props) {
    const orderID = props.orderId;
  return (
    
      <View>
        <RejectionDetailContainer orderId={orderID} />
      </View>
  
  );
}