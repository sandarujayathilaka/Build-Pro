import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../config/firebase";

export function fetchItemData(callback) {
  const itemsCollection = collection(db, "Item");


  const unsubscribe = onSnapshot(query(itemsCollection), (snapshot) => {
    const uniqueCategories = new Set();

    snapshot.forEach((doc) => {
      const data = doc.data();
      uniqueCategories.add(data.category);
    });

    const cards = Array.from(uniqueCategories).map((category) => ({
      id: category,
      title: category,
    }));

    if (typeof callback === "function") {
      callback(cards);
    }
  });

  return unsubscribe;
}
