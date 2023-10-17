import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { fetchItemData } from "../services/OrderItemServices";
import { styles } from "../styles/OrderItemStyles";

function OrderItems() {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(false);
 
      useEffect(() => {
        setLoading(true);
        const unsubscribe = fetchItemData(
          (cards) => {
            setCardData(cards);
            setLoading(false);
          }
        );
    
        // Unsubscribe from the snapshot listener when the component unmounts
        return () => unsubscribe();
      }, []);

const handleCardClick = (id) => {

  router.push(`/order_list/${id}`, { itemId: id });
 
};



  return (
    <ScrollView>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
       <Text style={styles.mainText}>Select Item</Text>
      <View style={styles.gridContainer}>
        {cardData.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleCardClick(item.id)}
            style={styles.gridItem}
          >
            
            <Text style={styles.cardTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      </View>
      )}
    </ScrollView>
  );
}



export default OrderItems;
