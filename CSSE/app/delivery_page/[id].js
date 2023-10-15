import { View, Text } from 'react-native'
import React from 'react'
import DeliveryNote from '../../src/screens/DeliveryNote'
import { useGlobalSearchParams } from 'expo-router';

const DeliveryPage = () => {

        const params = useGlobalSearchParams();

        const orderId = params.id;
      const deliveryObId = params. deliveryObId;

  return (
    <View>
      <DeliveryNote orderId={orderId} deliveryObId ={deliveryObId}/>
    </View>
  );
}

export default DeliveryPage