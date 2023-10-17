import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";

export function fetchDeliveryData(category,callback) {
  const deliveryDataQuery = query(
    collection(db, "delivery"),
    where("status", "==", category)
  );

  const unsubscribe = onSnapshot(deliveryDataQuery, (snapshot) => {
    const deliveryList = [];
    snapshot.forEach((doc) => {
      deliveryList.push({ ...doc.data(), id: doc.id });
    });

    if (typeof callback === "function") {
      callback(deliveryList);
    }
  });

  return () => unsubscribe();
}
