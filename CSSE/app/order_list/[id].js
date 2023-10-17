import {
  View,
} from "react-native";
import React from "react";
import { useGlobalSearchParams } from "expo-router";
import OrderList from '../../src/screens/OrderList'

const OrderLists = () => {
  const params = useGlobalSearchParams();

  const itemId = params.id;


  return (
    <View>
     <OrderList itemId={itemId}/>
    </View>
  );
  
};



export default OrderLists;
