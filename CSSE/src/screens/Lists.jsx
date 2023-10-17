import { View, Text,TouchableOpacity,Image } from "react-native";
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { router } from "expo-router";
import { styles } from "../styles/ListsStyles";
import { fetchDeliveryData } from "../services/ListServices";
import imageSource from "../../assets/hardware.jpg";
import { TextInput } from "react-native-paper";



const Lists = ({ route }) => {
  const [delivery, setDelivery] = useState([]);
  const [orderNo, setOrderNo] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    const unsubscribe = fetchDeliveryData(
      route.params.status,
      (deliveryData) => {
        setDelivery(deliveryData);

        if (deliveryData.length > 0) {
          setOrderNo(deliveryData[0].orderID);
        } else {
          console.log("No delivery items found.");
        }

        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

 const handleItemPress = (orderNo, status,deliveryid) => {
   if (status === "Pending") {
      router.push({
      pathname: `/delivery_page/${orderNo}`,
      params: {
        deliveryObId: deliveryid,
      },
    })
   } else if (status === "Rejected") {
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

  const filteredDelivery = delivery.filter(
    (item) =>
      item.deliveryId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.orderID.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by Delivery ID or Order ID"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={filteredDelivery}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};


export default Lists