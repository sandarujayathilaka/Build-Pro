import { View, Text } from 'react-native'
import React from 'react'
import RejectionNote from "../../src/screens/RejectionNote";
import { useGlobalSearchParams } from 'expo-router';

const RejectDetails = () => {

     const params = useGlobalSearchParams();

     const expectedQuantity=params.expectedQuantity
     const deliveryQuantity= params.deliveryNoticeQuantity
     const orderNo= params.orderNo
     const orderid= params.orderid
     const delid= params.delid
     const deleNo= params.deleNo
     const supId =params.supId
     const supName=params.supName
     const itemName = params.itemName;
    const condition = params.condition
    const deliveredOnTime = params.deliveredOnTime
    const arrivedQuantity = params.arrivedQuantity

  return (
    <View>
      <RejectionNote
        expectQty={expectedQuantity}
        delQty={deliveryQuantity}
        orderNo={orderNo}
        orderid={orderid}
        delid={delid}
        deleNo={deleNo}
        supId={supId}
        supName={supName}
        itemName={itemName}
        condition={condition}
        deliveredOnTime={deliveredOnTime}
        arrivedQuantity={arrivedQuantity}
      />
    </View>
  );
}

export default RejectDetails