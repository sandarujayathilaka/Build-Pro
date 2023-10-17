import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { router } from "expo-router";
import { styles } from "../styles/RejectNoteStyles";
import { updateDeliveryStatus } from "../services/RejectionNoteService";
import { Alert } from "react-native";
import imageNote from "../../assets/notes.webp";


const RejectionNote = (props) => {
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

 const handleSave = async () => {
  
  if (rejectNote.trim() === "") {
    Alert.alert("Error", "Rejection Note is required.");
    return;
  }

   setLoading(true);
   try {
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
       Alert.alert("Reject Note Sended", "The delivery Rejection Successful.", [
         {
           text: "OK",
           onPress: () => {
             router.push(`/home/homeredirect`);
           },
         },
       ]);
       setLoading(false);
     } else {
       setLoading(false);
     }
   } catch (error) {
     console.error("An error occurred:", error);
     Alert.alert("Error", "An error occurred while saving the data.");
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
      <Image source={imageNote} style={styles.delImage} />

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
            color="#EDAE10" 
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
            color="#EDAE10" 
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


export default RejectionNote;
