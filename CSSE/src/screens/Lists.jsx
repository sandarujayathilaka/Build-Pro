import { View, Text, StyleSheet, TouchableOpacity,Image } from "react-native";
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { router } from "expo-router";
import { styles } from "../styles/ListsStyles";
import { fetchDeliveryData } from "../services/ListServices";
import imageSource from "../../assets/Picture2.png";
import { formatDate } from "../utils/DateFormat";



const Lists = ({ route }) => {
  const [delivery, setDelivery] = useState([]);
  const [orderNo, setOrderNo] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = fetchDeliveryData(
      route.params.status,
      (deliveryData) => {
        setDelivery(deliveryData);

        if (deliveryData.length > 0) {
          setOrderNo(deliveryData[0].orderID);
          console.log(deliveryData[0].orderID);
        } else {
          console.log("No delivery items found.");
        }

        setLoading(false);
      }
    );

    // Unsubscribe from the snapshot listener when the component unmounts
    return () => unsubscribe();
  }, []);

 const handleItemPress = (orderNo, status,deliveryid) => {
   if (status === "Pending") {
     console.log(orderNo);
      router.push({
      pathname: `/delivery_page/${orderNo}`,
      params: {
        deliveryObId: deliveryid,
      },
    })
   } else if (status === "Rejected") {
        console.log(orderNo);
        router.push({
          pathname: `/reject_details/${orderNo}`,
          params: {
            deliveryObId: deliveryid,
          },
        });
      } else if (status === "Approved") {
        
         router.push({
           pathname: `/approve_details/${orderNo}`,
           params: {
             deliveryObId: deliveryid,
           },
         });
        
      } else {
        console.log("Category not available");
      }
 };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        handleItemPress(item.orderID, item.status, item.deliveryId)
      }
    >
      <View
        style={
          item.status === "Pending"
            ? styles.card
            : item.status === "Approved"
            ? styles.cardAccept
            : styles.cardReject
        }
      >
        <Text style={styles.mainText}>{item.itemName}</Text>
        <Text style={styles.subText}>Delivery ID: {item.deliveryId}</Text>
        <Text style={styles.subText}>Order ID: {item.orderID}</Text>
        <Image source={imageSource} style={styles.cardImage} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={delivery}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};


export default Lists