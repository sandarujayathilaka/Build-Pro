import { View, Text } from "react-native";
import React from "react";
import { useGlobalSearchParams } from "expo-router";
import ApproveDetails from "../../src/screens/ApproveDetails";

const ApproveDetailsPage = () => {
  const params = useGlobalSearchParams();

  const orderId = params.id;

  return (
    <View>
      <ApproveDetails orderId={orderId} />
    </View>
  );
};

export default ApproveDetailsPage;
