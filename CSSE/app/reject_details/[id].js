import { View, Text } from "react-native";
import React from "react";
import RejectionDetails from "../../src/screens/RejectionDetail";
import { useGlobalSearchParams } from "expo-router";

const RejectDetailsPage = () => {
  const params = useGlobalSearchParams();

  const orderId = params.id;

  return (
    <View>
      <RejectionDetails orderId={orderId} />
    </View>
  );
};

export default RejectDetailsPage;
