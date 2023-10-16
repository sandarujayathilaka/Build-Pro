import {
  doc,
  updateDoc,
  addDoc,
  collection,
  serverTimestamp,
  getDoc,
  getDocs,
  query,
  where,
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
  arrivedQuantity,
  itemID
) {
  try {
    // Update the order document
    const orderDocRef = doc(db, "Order", orderid);
    let newStatus = "Pending";
    const itemNo =itemID

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

   const inventoryCollectionRef = collection(db, "inventory");
   const inventoryQuery = query(
     inventoryCollectionRef,
     where("itemId", "==", itemNo)
   );
   const inventoryQuerySnapshot = await getDocs(inventoryQuery);

   if (!inventoryQuerySnapshot.empty) {
     // There should be only one matching document
     const inventoryDocRef = inventoryQuerySnapshot.docs[0].ref;

     // Retrieve the current item quantity
     const currentQuantity = parseFloat(inventoryQuerySnapshot.docs[0].data().qty);
     const numericArrivedQuantity = parseFloat(arrivedQuantity);

     // Calculate the new item quantity by adding arrivedQuantity
     const newItemQuantity = currentQuantity + numericArrivedQuantity;

     // Update the item quantity in the inventory document
     await updateDoc(inventoryDocRef, { qty: newItemQuantity });
   } else {
     console.error(`Inventory document with itemId ${itemNo} not found.`);
     return false; // Error occurred
   }
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
