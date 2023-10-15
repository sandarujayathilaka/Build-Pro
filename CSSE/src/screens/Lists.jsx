import { View, Text, StyleSheet, TouchableOpacity,Image } from "react-native";
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { router } from "expo-router";
import { styles } from "../styles/ListsStyles";
import { fetchDeliveryData } from "../services/ListServices";
import imageSource from "../../assets/Picture2.png";
import { formatDate } from "../components/DateFormat";



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
          setOrderNo(deliveryData[0].orderNo);
          console.log(deliveryData[0].orderNo);
        } else {
          console.log("No delivery items found.");
        }

        setLoading(false);
      }
    );

    // Unsubscribe from the snapshot listener when the component unmounts
    return () => unsubscribe();
  }, []);

 const handleItemPress = (orderNo, status) => {
   if (status === "Pending") {
     console.log(orderNo);
     router.push(`/delivery_page/${orderNo}`);
   } else if (status === "Rejected") {
     router.push(`/reject_details/${orderNo}`);
      } else if (status === "Approved") {
        router.push(`/approve_details/${orderNo}`);
      } else {
        console.log("Category not available");
      }
 };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleItemPress(item.orderNo, item.status)}
    >
      <View style={styles.card}>
        <Text style={styles.mainText}>{item.ItemName}</Text>
        <Text style={styles.subText}>Delivery ID : {item.deliveryId}</Text>
        <Text style={styles.subText}>Order ID : {item.orderNo}</Text>
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