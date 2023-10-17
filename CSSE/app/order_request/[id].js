import React from "react";
import {
  View,
} from "react-native";
import OrderRequest from "../../src/screens/OrderRequest";
import { useGlobalSearchParams } from 'expo-router';

const OrderInfo = () => {
  
  const params = useGlobalSearchParams();
  const category = params.category;
  const itemId = params.itemId;
  const itemName = params.itemName;
  const supplierLocation = params.supplierLocation;
  const supplierMobile = params.supplierMobile;
  const supplierName = params.supplierName;
  const supplierNo = params.supplierNo;
  const delivery = params.delivery;

  return (
 <View>
<OrderRequest
        category={category}
        itemId={itemId}
        itemName={itemName}
        supplierLocation={supplierLocation}
        supplierMobile={supplierMobile}
        supplierName={supplierName}
        supplierNo={supplierNo}
        delivery={delivery}
      />
 </View>
  );
}



export default OrderInfo;
