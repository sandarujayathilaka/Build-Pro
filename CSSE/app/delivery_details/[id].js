import { View, Text } from 'react-native'
import React from 'react'
import CheckDeliveryDetails from "../../src/screens/CheckDeliveryDetails";
import { useGlobalSearchParams } from 'expo-router';

const DeliveryDetail = () => {

    const params = useGlobalSearchParams();

    const orderNo = params.orderNo;
    const itmName = params.itmName;
    const deliveryId = params.deliveryId;
    const deliveryNumber = params.deliveryNumber;
    const delItemCount = params.delItemCount;
    const orderid = params.OrderId;
    const orderQty = params.expectOrderQun;
    const supId= params.supId
    const supName= params.supName
    const rest =params.rest


console.log(orderNo);
//  console.log(itmName);
//  console.log(deliveryId);
//  console.log(deliveryNumber);
//  console.log(delItemCount);
//  console.log(orderid);

  return (
    <View>
      <CheckDeliveryDetails
        orderNo={orderNo}
        itmName={itmName}
        deliveryId={deliveryId}
        deliveryNumber={deliveryNumber}
        delItemCount={delItemCount}
        orderid={orderid}
        orderQty={orderQty}
        supId={supId}
        supName={supName}
        rest={rest}
      />
    </View>
  );
}

export default DeliveryDetail