import React from "react";
import { ScrollView, View, Text } from "react-native";
import { formatDate } from "../components/DateFormat";
import { styles } from "../styles/DeliNoteStyles";

function RejectionDetailPresentation({ deliveryDetails, orderDetails }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Rejected Delivery Details</Text>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Item Name:</Text>
        <Text style={styles.detailValue}>{deliveryDetails.ItemName}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Item Quantity:</Text>
        <Text style={styles.detailValue}>{deliveryDetails.ItemQty}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Status:</Text>
        <Text style={styles.detailValue}>{deliveryDetails.status}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Delivery ID:</Text>
        <Text style={styles.detailValue}>{deliveryDetails.deliveryId}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Order ID:</Text>
        <Text style={styles.detailValue}>{deliveryDetails.orderNo}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Supplier ID:</Text>
        <Text style={styles.detailValue}>{deliveryDetails.supID}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Supplier Name:</Text>
        <Text style={styles.detailValue}>{deliveryDetails.supName}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Reject Reason:</Text>
        <Text style={styles.detailValue}>{deliveryDetails.rejectNote}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Rejected date:</Text>
        <Text style={styles.detailValue}>
          {formatDate(deliveryDetails.rejectDate)}
        </Text>
      </View>
    </ScrollView>
  );
}

export default RejectionDetailPresentation;
