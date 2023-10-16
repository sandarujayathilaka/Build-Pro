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
    const itemID = params.itemID;

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
        itemID={itemID}
      />
    </View>
  );
}

export default DeliveryDetail