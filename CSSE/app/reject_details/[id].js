import { View} from "react-native";
import React from "react";
import CheckedDetails from "../../src/screens/CheckedDetails";
import { useGlobalSearchParams } from "expo-router";

const RejectDetailsPage = () => {
  const params = useGlobalSearchParams();

  const orderId = params.id;
  const deliveryObId = params.deliveryObId;

  return (
    <View>
      <CheckedDetails orderId={orderId} deliveryObId={deliveryObId} />
    </View>
  );
};

export default RejectDetailsPage;
