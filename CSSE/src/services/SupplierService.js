import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase";

export async function fetchSupplierDetails(itemId, callback) {

  const usersQuery = query(
    collection(db, "supplier"),
    where("category", "==", itemId)
  );

  try {
    const unsubscribe = onSnapshot(usersQuery, (snapshot) => {
  
      const usersList = [];
      snapshot.forEach((doc) => {
        
        if (doc.exists()) {
         
         
          usersList.push({ ...doc.data(), id: doc.id });
         
        }else{
          console.log("No supplier found for the category");
        }
       
      });
  
      if (typeof callback === "function") {
    
        callback(usersList);
       
      }
    });
    return unsubscribe;
  } catch (error) {
    console.error("Error fetching supplier data:", error);
  }
}

