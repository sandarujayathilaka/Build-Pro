import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    TextInput,
    Image,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { router } from "expo-router";
import { fetchSupplierDetails } from "../services/SupplierService";
import { styles } from "../styles/OrderListStyles";


export default function DisplayContent(props) {

    const itemId = props.itemId;
 
    const [supplier, setSupplier] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

  
    imageSource = require("../../assets/no1.png");
  
    useEffect(() => {
      setLoading(true);
      const unsubscribe = fetchSupplierDetails(
        itemId,
        (users) => {
          setSupplier(users);
          setLoading(false);
        }
       
      );
    
      
    }, [itemId]);
  
    const handleItemPress = (id,itemid,itemName,supplierLocation,supplierMobile,supplierName,supplierNo,delivery) => {
     
      router.push({
        pathname:`/order_request/${id}`, 
        params: {
           Id:id,
            category: itemId,
            itemId: itemid,
            itemName: itemName,
            supplierLocation: supplierLocation,
            supplierMobile: supplierMobile,
            supplierName: supplierName,
            supplierNo: supplierNo,
            delivery: delivery,
      },
    });
      console.log(`Clicked on card with ID ${id}`);
    };
  
    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => handleItemPress(item.id,item.itemId,item.itemName,item.supplierLocation,item.supplierMobile,item.supplierName,item.supplierNo,item.delivery)}>
        <View style={styles.card}>
          <Text style={styles.mainText}>{item.itemName}</Text>
          <Text>{item.supplierName}</Text>
          <Text>{item.supplierMobile}</Text>
          <Text>{item.supplierLocation}</Text>
          <Text  style={styles.delivery}>{item.delivery}</Text>
          <View>
            <TouchableOpacity  onPress={() => handleItemPress(item.id,item.itemId,item.itemName,item.supplierLocation,item.supplierMobile,item.supplierName,item.supplierNo,item.delivery)} style={styles.customButton}>
              <Text style={styles.buttonText}>Request Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  
   const filteredSupplier = supplier.filter(
      (item) =>
        item.supplierLocation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.supplierName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <View style={styles.container}>
          <TextInput
          style={styles.searchBar}
          placeholder="Search by location or name"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        {loading ? (
          <Text>Loading...</Text>
        ) : filteredSupplier.length === 0 ? (
          <View>
            <Image source={imageSource} style={styles.cardImage}/>
            <Text style={styles.errormsg}>No record founds.</Text>
            </View>
        ) : (
          <View>
          <Text style={styles.title}>Select Supplier</Text>
          <FlatList
            data={filteredSupplier}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
       </View>
        )}
      </View>
    );
    
  };

  

  