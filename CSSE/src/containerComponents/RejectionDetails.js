import React, { useEffect, useState } from "react";
import RejectionDetailPresentation from "../components/RejectionDetails"; // Import the Presentation component
import LoadingIndicator from "../components/LoadingIndecator";
import { fetchDeliveryDetails } from "../services/DeliveryNoteService";

function RejectionDetailContainer(props) {
  const orderID = props.orderId;

  const [deliveryDetails, setDeliveryDetails] = useState({});
  const [orderDetails, setOrderDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetchDeliveryDetails(
      orderID,
      (data) => {
        setDeliveryDetails(data);
        console.log(data);
        setLoading(false);
      },
      (data) => {
        setOrderDetails(data);
        console.log(data);
        setLoading(false);
      }
    );
  }, [orderID]);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <RejectionDetailPresentation
      deliveryDetails={deliveryDetails}
      orderDetails={orderDetails}
    />
  );
}

export default RejectionDetailContainer;
