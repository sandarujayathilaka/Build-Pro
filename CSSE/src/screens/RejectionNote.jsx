import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { db } from "../../config/firebase";
import { router } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { Feather } from "@expo/vector-icons"; // Add this line
import { styles } from "../styles/RejectNoteStyles";
import { updateDeliveryStatus } from "../services/RejectionNoteService";


const DeliveryDetails = (props) => {
  const [condition, setCondition] = useState("Acceptable");
  const [OrderState, setOrderState] = useState("No");
  const [rejectNote, setRejectNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [rest, setRest] = useState("");

  const expectedQuantity = props.expectQty;
  const deliveryNoticeQuantity = props.delQty;
  const orderNo = props.orderNo;
  const orderid = props.orderid;
  const delid = props.delid;
  const deleNo = props.deleNo;
  const supId =props.supId
  const supName =props.supName
  const itemName = props.itemName;
  const conditionReject = props.condition
  const deliveredOnTime = props.deliveredOnTime
  const arrivedQuantity= props.arrivedQuantity

  console.log(orderid)
  console.log(orderid);
  console.log(delid);

 const handleSave = async () => {
   setLoading(true);
   const success = await updateDeliveryStatus(
     delid,
     rejectNote,
     conditionReject,
     orderid,
     deliveredOnTime,
     arrivedQuantity,
     OrderState
   );

   if (success) {
     // Update successful
     setLoading(false);
   } else {
     // Handle error
     setLoading(false);
   }
 };

  useEffect(() => {
    const orderItemQty = parseFloat(expectedQuantity);
    const deliveryItemQty = parseFloat(deliveryNoticeQuantity);
    const remainingQty =
      isNaN(orderItemQty) || isNaN(deliveryItemQty)
        ? null
        : orderItemQty - deliveryItemQty;

    setRest(remainingQty);
  }, [deliveryNoticeQuantity, expectedQuantity]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Order Rejection Note</Text>

      <Text style={styles.label}>Supplier ID : {supId}</Text>
      <Text style={styles.label}>Delivery ID : {deleNo}</Text>
      <Text style={styles.label}>Order ID : {orderNo}</Text>

      <Text style={styles.label}>Supplier Name : {supName}</Text>
      <Text style={styles.label}>Item Name : {itemName}</Text>
      <Text style={styles.label}>Checked By : Mr.Lasantha</Text>
      <Text style={styles.label}>Rejection Note : </Text>
      <TextInput
        style={styles.textArea}
        multiline={true}
        numberOfLines={4}
        onChangeText={(text) => setRejectNote(text)}
        value={rejectNote}
        placeholder="Enter Vehicle Matter in Brief"
      />

      <Text style={styles.label}>Need to reorder</Text>
      <View style={styles.radioGroup}>
        <TouchableOpacity
          style={styles.radioOption}
          onPress={() => setOrderState("Yes")}
        >
          <RadioButton.Android
            value="Yes"
            status={OrderState === "Yes" ? "checked" : "unchecked"}
            onPress={() => setOrderState("Yes")}
            color="#EDAE10" // Changed the color to a nice yellow
          />
          <Text style={styles.radioText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.radioOption}
          onPress={() => setOrderState("No")}
        >
          <RadioButton.Android
            value="No"
            status={OrderState === "No" ? "checked" : "unchecked"}
            onPress={() => setOrderState("No")}
            color="#EDAE10" // Changed the color to a nice yellow
          />
          <Text style={styles.radioText}>No</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.acceptButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Send Note</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};


export default DeliveryDetails;
