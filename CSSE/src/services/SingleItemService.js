import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase";

export async function fetchItemDetails(itemId, callback) {

  const itemQuery = query(
    collection(db, "Item"),
    where("itemId", "==", itemId)
  ); 

  try {
    const unsubscribe = onSnapshot(itemQuery, (snapshot) => {
  
      const itemList = [];
      snapshot.forEach((doc) => {
       
        if (doc.exists()) {
         
         
          itemList.push({ ...doc.data() });
         
        }else{
          console.log("No supplier found for the category");
        }
       
      });
      
      if (typeof callback === "function") {
     
        callback(itemList[0]);
       
      }
    });
    return unsubscribe;
  } catch (error) {
    console.error("Error fetching item data:", error);
  }
}

