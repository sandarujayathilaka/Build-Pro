import { View} from "react-native";
import React from "react";
import { useGlobalSearchParams } from "expo-router";
import ApproveDetails from "../../src/screens/ApproveDetails";

const ApproveDetailsPage = () => {
  const params = useGlobalSearchParams();

  const orderId = params.id;
  const deliveryObId = params.deliveryObId;

  return (
    <View>
      <ApproveDetails orderId={orderId} deliveryObId={deliveryObId} />
    </View>
  );
};

export default ApproveDetailsPage;
