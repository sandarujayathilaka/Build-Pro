import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import { router } from "expo-router";
import { styles } from "../styles/DeliNoteStyles";
import { fetchDeliveryDetails } from "../services/DeliveryNoteService";
import imageSource from "../../assets/deliveyImage.webp";


function CheckDeliveryButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.checkDeliveryButton} onPress={onPress}>
      <Text style={styles.checkDeliveryButtonText}>Check Delivery</Text>
    </TouchableOpacity>
  );
}

export default function DeliveryNote(props) {
  const orderID = props.orderId;
  const deliveryObId = props.deliveryObId;;

  console.log(orderID)
  console.log(deliveryObId);

  const [deliveryDetails, setDeliveryDetails] = useState({});
  const [orderDetails, setOrderDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetchDeliveryDetails(
      orderID,deliveryObId,
      (data) => {
        setDeliveryDetails(data);
        console.log(data);
        setLoading(false);
      },
      (data) => {
        setOrderDetails(data);
        console.log(data);
        setLoading(false);
      }
    );
    console.log(deliveryDetails)
  }, [orderID]);

  const handleItemPress = (id) => {
   
    // console.log(orderDetails);
    // console.log("hi" + orderDetails.rest);
    // console.log(
    //   orderID,
    //   deliveryDetails.itemName,
    //   deliveryDetails.id,
    //   deliveryDetails.deliveryId,
    //   deliveryDetails.itemQty,
    //   orderDetails.quantity,
    //   deliveryDetails.supID,
    //   deliveryDetails.supName,
    //   orderDetails.rest
    // );
    router.push({
      pathname: `/delivery_details/${id}`,
      
      params: {
        orderNo: orderID,
        itmName: deliveryDetails.itemName,
        deliveryId: deliveryDetails.id,
        deliveryNumber: deliveryDetails.deliveryId,
        delItemCount: deliveryDetails.itemQty,
        OrderId: orderDetails.id,
        expectOrderQun: orderDetails.quantity,
        supId: deliveryDetails.supID,
        supName: deliveryDetails.supName,
        rest: orderDetails.rest,
      },
    }); //when need to pass multiple value with link use this method
    console.log(`Clicked with form ${id}`);
  };
  
  if (loading) {
    // Show a loading indicator here
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Delivery Details</Text>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.delImage} />
      </View>

      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Item Name:</Text>
        <Text style={styles.detailValue}>{deliveryDetails.itemName}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Item Quantity:</Text>
        <Text style={styles.detailValue}>{deliveryDetails.itemQty}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Delivery ID:</Text>
        <Text style={styles.detailValue}>{deliveryDetails.deliveryId}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Order ID:</Text>
        <Text style={styles.detailValue}>{deliveryDetails.orderID}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Supplier ID:</Text>
        <Text style={styles.detailValue}>{deliveryDetails.supID}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Supplier Name:</Text>
        <Text style={styles.detailValue}>{deliveryDetails.supName}</Text>
      </View>
      <CheckDeliveryButton
        onPress={() => {
          if (Object.keys(orderDetails).length > 0) {
            handleItemPress(orderID);
          }
        }}
      />
    </ScrollView>
  );
}
