import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import { RadioButton } from "react-native-paper";
import { router } from "expo-router";
import { styles } from "../styles/CheckDetailsStyles";
import { updateOrderAndDelivery } from "../services/CheckDetailsService";
import imageSource from "../../assets/delcheck.png";

const DeliveryDetails = (props) => {

  const [condition, setCondition] = useState("Acceptable");
  const [deliveredOnTime, setDeliveredOnTime] = useState("Yes");
  const [reject, setRejectReason] = useState("");
  const [arrivedQuantity, setArrivedQuantity] = useState("");
  const [loading, setLoading] = useState(false);
  const [rest,setRest] = useState("5000")


  const expectedQuantity = props.orderQty;
  const deliveryNoticeQuantity = props.delItemCount;
  const orderNo = props.orderNo
  const orderid = props.orderid
  const delid = props.deliveryId
  const deleNo = props.deliveryNumber;
  const supId =props.supId
  const supName = props.supName
  const itemName =props.itmName
  const restItems = props.rest

 console.log(restItems)
console.log(orderNo);


   const handleSave = async () => {
     setLoading(true);
     console.log(condition)
     try {
       const success = await updateOrderAndDelivery(
         orderid,
         rest,
         delid,
         orderNo,
         deleNo,
         condition,
         deliveredOnTime,
         arrivedQuantity
       );
       if (success) {
         // Update successful
         setLoading(false);
       } else {
         // Handle error (if needed)
         console.error("Update failed.");
         setLoading(false);
       }
     } catch (error) {
       // Handle any exceptions that occur during the update process
       console.error("An error occurred during the update:", error);
       setLoading(false);
     }
   };


  const handleItemPress = (id) => {
    router.push({
      pathname: `/reject_page/${id}`,
      params: {
        expectedQuantity: expectedQuantity,
        deliveryNoticeQuantity: deliveryNoticeQuantity,
        orderNo: orderNo,
        orderid: orderid,
        delid: delid,
        deleNo: deleNo,
        supId: supId,
        supName: supName,
        itemName: itemName,
        condition: condition,
        deliveredOnTime: deliveredOnTime,
        arrivedQuantity: arrivedQuantity,
      },
    }); //when need to pass multiple value with link use this method
    console.log(`Clicked with form ${id}`);
  };

  useEffect(() => {
    const orderItemQty = parseFloat(expectedQuantity);
    const deliveryItemQty = parseFloat(deliveryNoticeQuantity);
    const remainingQty =
      isNaN(orderItemQty) || isNaN(deliveryItemQty)
        ? null
        : restItems - deliveryItemQty;

    setRest(remainingQty);
  }, [deliveryNoticeQuantity, expectedQuantity]);


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Delivery Details Checking</Text>
       <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.delImage} />
      </View>
      <Text style={styles.label}>Condition:</Text>
      <View style={styles.radioGroup}>
        <TouchableOpacity
          style={styles.radioOption}
          onPress={() => setCondition("Acceptable")}
        >
          <RadioButton.Android
            value="Acceptable"
            status={condition === "Acceptable" ? "checked" : "unchecked"}
            onPress={() => setCondition("Acceptable")}
            color="#EDAE10" // Changed the color to a nice yellow
          />
          <Text style={styles.radioText}>Acceptable</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.radioOption}
          onPress={() => setCondition("Unacceptable")}
        >
          <RadioButton.Android
            value="Unacceptable"
            status={condition === "Unacceptable" ? "checked" : "unchecked"}
            onPress={() => setCondition("Unacceptable")}
            color="#EDAE10" // Changed the color to a nice yellow
          />
          <Text style={styles.radioText}>Unacceptable</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Delivered within due date:</Text>
      <View style={styles.radioGroup}>
        <TouchableOpacity
          style={styles.radioOption}
          onPress={() => setDeliveredOnTime("Yes")}
        >
          <RadioButton.Android
            value="Yes"
            status={deliveredOnTime === "Yes" ? "checked" : "unchecked"}
            onPress={() => setDeliveredOnTime("Yes")}
            color="#EDAE10" // Changed the color to a nice yellow
          />
          <Text style={styles.radioText}>Yes, In time</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.radioOption}
          onPress={() => setDeliveredOnTime("No")}
        >
          <RadioButton.Android
            value="No"
            status={deliveredOnTime === "No" ? "checked" : "unchecked"}
            onPress={() => setDeliveredOnTime("No")}
            color="#EDAE10" // Changed the color to a nice yellow
          />
          <Text style={styles.radioText}>No, Not in time</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Arrived Quantity</Text>
      <Text style={styles.quantityText}>
        Expected Quantity: {expectedQuantity}
      </Text>
      <Text style={styles.quantityText}>
        Delivery Notice Mentioned Quantity: {deliveryNoticeQuantity}
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          // Validate if the entered text is a positive number
          if (/^\d*\.?\d*$/.test(text)) {
            // If it's a positive number, update the state
            setArrivedQuantity(text);
          }
        }}
        value={arrivedQuantity}
        placeholder="Enter Arrived Quantity"
        keyboardType="numeric"
      />
      <Text style={styles.label}>Have you Any Reject Reason:</Text>
      <View style={styles.radioGroup}>
        <TouchableOpacity
          style={styles.radioOption}
          onPress={() => setRejectReason("Yes")}
        >
          <RadioButton.Android
            value="Yes"
            status={reject === "Yes" ? "checked" : "unchecked"}
            onPress={() => setRejectReason("Yes")}
            color="#EDAE10" // Changed the color to a nice yellow
          />
          <Text style={styles.radioText}>Yes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.radioOption}
          onPress={() => setRejectReason("No")}
        >
          <RadioButton.Android
            value="No"
            status={reject === "No" ? "checked" : "unchecked"}
            onPress={() => setRejectReason("No")}
            color="#EDAE10" // Changed the color to a nice yellow
          />
          <Text style={styles.radioText}>No</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={
          parseFloat(arrivedQuantity) < parseFloat(deliveryNoticeQuantity) ||
          arrivedQuantity === "" ||
          reject === "Yes" ||
          condition === "Unacceptable"
            ? styles.disableButton
            : styles.acceptButton
        }
        onPress={
          !(
            parseFloat(arrivedQuantity) < parseFloat(deliveryNoticeQuantity) ||
            arrivedQuantity === "" ||
            reject === "Yes" ||
            condition === "Unacceptable"
          )
            ? handleSave
            : undefined
        }
        disabled={
          parseFloat(arrivedQuantity) < parseFloat(deliveryNoticeQuantity) ||
          arrivedQuantity === "" ||
          reject === "Yes" ||
          condition === "Unacceptable"
        }
      >
        <Text style={styles.buttonText}>Accept</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={
          reject === "Yes" ||
          condition === "Unacceptable" ||
          parseFloat(arrivedQuantity) < parseFloat(deliveryNoticeQuantity)
            ? styles.rejectButton
            : styles.disableButton
        }
        onPress={
          reject === "Yes" ||
          condition === "Unacceptable" ||
          parseFloat(arrivedQuantity) < parseFloat(deliveryNoticeQuantity)
            ? handleItemPress
            : undefined
        }
        disabled={
          !(
            reject === "Yes" ||
            condition === "Unacceptable" ||
            parseFloat(arrivedQuantity) < parseFloat(deliveryNoticeQuantity)
          )
        }
      >
        <Text style={styles.buttonText}>Reject</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DeliveryDetails;
