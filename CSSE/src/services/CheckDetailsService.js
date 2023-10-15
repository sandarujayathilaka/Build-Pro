import {
  doc,
  updateDoc,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../config/firebase";

export async function updateOrderAndDelivery(
  orderid,
  rest,
  delid,
  orderNo,
  deleNo,
  condition,
  deliveredOnTime,
  arrivedQuantity
) {
  try {
    // Update the order document
    const orderDocRef = doc(db, "Order", orderid);
    let newStatus = "Pending";

    if (rest === 0) {
      newStatus = "Completed";
    }

    const updatedOrderData = {
      status: newStatus,
      rest: rest.toString(),
    };

    await updateDoc(orderDocRef, updatedOrderData);

    // Update the delivery document
    const deliveryDocRef = doc(db, "delivery", delid);
    const updatedDeliveryData = {
      status: "Approved",
      approvedDate: serverTimestamp(),
    };

    await updateDoc(deliveryDocRef, updatedDeliveryData);

    // Prepare data for the 'checkform' collection
    const checkformData = {
      orderNo: orderNo,
      delNo: deleNo,
      condition: condition,
      deliveredOnTime: deliveredOnTime,
      arrivedQuantity: arrivedQuantity,
      status: "Approved",
      acceptedDate: serverTimestamp(),
      // Add other fields if needed
    };

    // Add a new document to the 'checkform' collection
    await addDoc(collection(db, "checkform"), checkformData);

    return true; // Success
  } catch (error) {
    console.error("Error updating documents:", error);
    return false; // Error occurred
  }
}
