import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

export async function fetchDeliveryDetails(orderID,deliveryObId,callbackDel,callbackOrder) {
  if (!orderID) {
    return;
  }
console.log("DeliveryNoteService :",deliveryObId)

  const deliveryDataQuery = query(
    collection(db, "delivery"),
    where("deliveryId", "==", deliveryObId)
  );

  try {
    const deliverySnapshot = await getDocs(deliveryDataQuery);
    const deliveryList = [];

    deliverySnapshot.forEach((doc) => {
      deliveryList.push({ ...doc.data(), id: doc.id });
    });

    if (deliveryList.length === 1) {
      const firstDelivery = deliveryList[0];
      callbackDel(firstDelivery);
    } else {
      console.log("Delivery document not found");
    }
console.log("DeliveryNoteService :", orderID);
    const orderDataQuery = query(
      collection(db, "Order"),
      where("orderID", "==", orderID)
    );

    const orderSnapshot = await getDocs(orderDataQuery);
    const orderList = [];

    orderSnapshot.forEach((doc) => {
      orderList.push({ ...doc.data(), id: doc.id });
    });

    if (orderList.length === 1) {
      callbackOrder(orderList[0]);
    } else {
      console.log("Order document not found");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
