import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export async function addItemData(category,
    address,
    itemName,
    itemId,
    newOrderId,
    siteName,
    number,
    quantity,
    currentDate,
    requireDate,
    supplierNo,
    supplierLocation,
    supplierMobile,
    supplierName,
    total,
    delivery,
    description,
    selectedColor,
    selectedMaterial,
    selectedSize) {

try{
 const requestDb = collection(db, "Order");
 await addDoc(requestDb, {
  category: category,
  deliveryAddress: address,
  itemName:itemName,
  itemNo:itemId,
  orderID:newOrderId,
  siteName:siteName,
  phoneNumber:number,
  quantity:quantity,
  requestedDate:currentDate,
  requiredDate:requireDate,
  rest:quantity,
  status: "Pending",
  supplierId: supplierNo,
  supplierLocation:supplierLocation,
  supplierMobile:supplierMobile,
  supplierName:supplierName,
  totalAmount:total,
  delivery:delivery,
  description:description,
  color:selectedColor,
  material:selectedMaterial,
  size:selectedSize,
});
return true;
}catch (error) {
  console.error("Error adding order request:", error);
  return false; 
}
}
