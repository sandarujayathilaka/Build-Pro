import { View, Text } from 'react-native'
import React from 'react'
import DeliveryNote from '../../src/screens/DeliveryNote'
import { useGlobalSearchParams } from 'expo-router';

const DeliveryPage = () => {

        const params = useGlobalSearchParams();

        const orderId = params.id;
     

  return (
    <View>
     <DeliveryNote orderId={orderId}/>
    </View>
  )
}

export default DeliveryPage