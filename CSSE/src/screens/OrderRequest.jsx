import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from "@react-native-picker/picker";
import { styles } from "../styles/OrderRequestStyles";
import { fetchItemDetails } from "../services/SingleItemService";
import { addItemData } from "../services/OrderRequestService";


const OrderInfo = (props) => {
  const [itemdata, setItemData] = useState(null);
  const [requireDate, setRequireDate] = useState(new Date()); 
  const [loading,setLoading] = useState(false);
 
  const category = props.category;
  const itemId = props.itemId;
  const itemName = props.itemName;
  const supplierLocation = props.supplierLocation;
  const supplierMobile = props.supplierMobile;
  const supplierName = props.supplierName;
  const supplierNo = props.supplierNo;
  const delivery = props.delivery;

  const [selectedSize, setSelectedSize] = useState(""); 
  const [sizeOptions, setSizeOptions] = useState([]);
  const [selectedColor, setSelectedColor] = useState(""); 
  const [colorOptions, setColorOptions] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState(""); 
  const [materialOptions, setMaterialOptions] = useState([]);
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState("");
  const [number, setNumber] = useState("");
  const [price, setPrice] = useState("");
  const [siteName, setSiteName] = useState("");
  const [description, setDescription] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [error, setError] = useState("");
  const [numerror, setNumError] = useState("");
  const [addresserror, setAddresserror] = useState("");
  const [nameerror, setNameerror] = useState("");

 
  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios'); 
    if (selectedDate) {
      setRequireDate(selectedDate);
    }
  };
  useEffect(() => {
 setLoading(true);
        const unsubscribe = fetchItemDetails(itemId,
          (itemList) => {
            setItemData(itemList);
    
            if (itemList.length < 1) {
              console.log("No order items category found.");
            }
            setPrice(itemList.unitPrice);
            setSizeOptions(itemList.size);
            
            setColorOptions(itemList.color);
            setMaterialOptions(itemList.material);
            setLoading(false);
          }
        );
    
        
  }, [itemId]);

  useEffect(() => {
    if (quantity.trim() !== "") {
      setError(""); 
    }
  }, [quantity]);

  useEffect(() => {
    if (number.trim() !== "") {
      setNumError(""); 
    }
  }, [number]);

  useEffect(() => {
    if (address.trim() !== "") {
      setAddresserror(""); 
    }
  }, [address]);

  useEffect(() => {
    if (siteName.trim() !== "") {
      setNameerror(""); 
    }
  }, [siteName]);



  const handleSave = async() => {
    if(number.trim() === ""){
      setNumError("Number is required");
    }else if(siteName.trim() === ""){
      setNameerror("SiteName is required");
    }else if (quantity.trim() === "") {
      setError("Quantity is required");
    }else if(address.trim() === ""){
      setAddresserror("Address is required");
    }
    else{
    const generateOrderId = () => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let result = '';
      for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      return result;
    };
  
    const newOrderId = generateOrderId();
  
    // Get the current date in the format YYYY-MM-DD
    const getCurrentDate = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const day = now.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
  
    const currentDate = getCurrentDate();
const total = price * quantity;


    try{
      const success = await addItemData(category,address,itemName,itemId,newOrderId,siteName,number,quantity,currentDate,requireDate,supplierNo,supplierLocation,supplierMobile,supplierName,total,delivery,description,selectedColor,selectedMaterial,selectedSize);
      if (success) {
        setAddress('');
        setQuantity('');
        setSiteName('');
        setNumber('');
        setDescription('');
        setColorOptions([]);
        setMaterialOptions([]);
        setSizeOptions([]);
        setRequireDate(new Date());
         
        // Show an alert when the Order request is successful
        Alert.alert("Order Placed Successfully", [
          {
            text: "OK",
            onPress: () => {
            
           
              <Link href="/index"></Link>;
            },
          },
        ]);
        setLoading(false);
      } else {
     
       Alert.alert(
         "Order Placing Failed"
       );
        setLoading(false);
      }
    } catch (error) {
      
    Alert.alert("An error occurred during the order request:", error);
      setLoading(false);
    }
   
  
  }
  };

  return (
   <ScrollView contentContainerStyle={styles.container}>
     
      {itemdata ? (
        <View>
           
          <Text style={styles.mainText}>Order Info</Text>
          <View style={styles.card}>
          <Text style={styles.text}>Supplier Name - {supplierName}</Text>
          <Text style={styles.text}>Supplier Mobile - {supplierMobile}</Text>
          <Text style={styles.text}>Supplier Address - {supplierLocation}</Text>
          <Text style={styles.text}>Order Category - {category}</Text>
          <Text style={styles.text}>Item Name - {itemName}</Text>
          <Text style={styles.text}>Cost Per Item - {price}</Text>
          <Text style={styles.delivery}>{delivery}</Text>
          </View>
          
          <Text style={styles.labeltop}>Site Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSiteName(text)}
          value={siteName}
          placeholder="Enter your site name"
        />
{nameerror ? <Text style={styles.errorText}>{nameerror}</Text> : null}

<Text style={styles.labeltop}>Site Mobile Number:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNumber(text)}
          value={number}
          placeholder="Enter your site mobile phone"
        />
{numerror ? <Text style={styles.errorText}>{numerror}</Text> : null}
      
{materialOptions && materialOptions.length > 0 && (
  <View>
    <Text style={styles.labeltop}>Material:</Text>
    <Picker
      selectedValue={selectedMaterial}
      onValueChange={(itemValue, itemIndex) => setSelectedMaterial(itemValue)}
    >
      <Picker.Item label="Select Material" value="" />
      {materialOptions.map((materialOption, index) => (
        <Picker.Item key={index} label={materialOption} value={materialOption} />
      ))}
    </Picker>
  </View>
)}

{sizeOptions && sizeOptions.length > 0 && (
  <View>
    <Text style={styles.labeltop}>Size:</Text>
    <Picker
      selectedValue={selectedSize}
      onValueChange={(itemValue, itemIndex) => setSelectedSize(itemValue)}
    >
      <Picker.Item label="Select size" value="" />
      {sizeOptions.map((sizeOption, index) => (
        <Picker.Item key={index} label={sizeOption} value={sizeOption} />
      ))}
    </Picker>
  </View>
)}

{colorOptions && colorOptions.length > 0 && (
  <View>
    <Text style={styles.labeltop}>Color:</Text>
    <Picker
      selectedValue={selectedColor}
      onValueChange={(itemValue, itemIndex) => setSelectedColor(itemValue)}
    >
      <Picker.Item label="Select Color" value="" />
      {colorOptions.map((colorOption, index) => (
        <Picker.Item key={index} label={colorOption} value={colorOption} />
      ))}
    </Picker>
  </View>
)}

  <View style={styles.labelContainer}>
    <Text style={styles.label}>Quantity:</Text>
    <Text style={styles.total}>Total: {quantity * price}</Text>
  </View>


        <TextInput
          style={styles.input}
          onChangeText={(text) => setQuantity(text)}
          value={quantity}
          keyboardType="numeric"
        />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setAddress(text)}
          value={address}
          placeholder="Enter your address"
        />
{addresserror ? <Text style={styles.errorText}>{addresserror}</Text> : null}
      <Text style={styles.label}>Required Date:</Text>
      <TextInput
        style={styles.input}
        value={requireDate.toDateString()} 
      
        onTouchStart={showDatepicker} 
      />

      {showDatePicker && (
        <DateTimePicker
          value={requireDate}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}

<TextInput
          style={styles.input}
          onChangeText={(text) => setDescription(text)}
          value={description}
          placeholder="Any description"
        />
        
          <TouchableOpacity style={styles.customButton} onPress={handleSave}>
            <Text style={styles.buttonText}>Send Request</Text>
          </TouchableOpacity>
        
    
        </View>
      ) : (
        <Text>Loading...</Text>
      )}

      
   </ScrollView>
  );
};



export default OrderInfo;
