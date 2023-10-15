import { View, Text } from "react-native";
import React from "react";
import RejectionDetails from "../../src/screens/RejectionDetail";
import { useGlobalSearchParams } from "expo-router";

const RejectDetailsPage = () => {
  const params = useGlobalSearchParams();

  const orderId = params.id;
  const deliveryObId = params.deliveryObId;

  return (
    <View>
      <RejectionDetails orderId={orderId} deliveryObId={deliveryObId} />
    </View>
  );
};

export default RejectDetailsPage;
