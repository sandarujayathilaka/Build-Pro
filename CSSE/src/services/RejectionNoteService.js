import { doc, updateDoc, addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebase";

export async function updateDeliveryStatus(
  delid,
  rejectNote,
  conditionReject,
  orderid,
  deliveredOnTime,
  arrivedQuantity,
  OrderState
) {
  const deliveryDocRef = doc(db, "delivery", delid);

  try {
    // Update the "status" and "rejectNote" fields in the "delivery" collection
    await updateDoc(deliveryDocRef, {
      status: "Rejected",
      rejectNote: rejectNote,
      rejectDate: serverTimestamp(),

      // Add other fields you want to update
    });
    console.log("Document updated successfully");

    console.log(
      delid,
      rejectNote,
      conditionReject,
      orderid,
      deliveredOnTime,
      arrivedQuantity,
      OrderState
    );

    // Add a new document to the 'checkform' collection
    const checkformData = {
      orderId: orderid,
      delId: delid,
      status: "Rejected",
      rejectNote: rejectNote,
      conditionReject: conditionReject,
      deliveredOnTime: deliveredOnTime,
      arrivedQuantity: arrivedQuantity,
      OrderState: OrderState,
      rejectDate: serverTimestamp(),
    };

    await addDoc(collection(db, "checkform"), checkformData);

    return true; // Success
  } catch (error) {
    console.error("Error updating document: ", error);
    return false; // Error occurred
  }
}
