import React, { useEffect, useState } from "react";
import CheckedDetailsPresentation from "../presentation/CheckedDetails"; // Import the Presentation component
import LoadingIndicator from "../shared/LoadingIndecator";
import { fetchDeliveryDetails } from "../../services/DeliveryNoteService";

function CheckedDetailsContainer(props) {
  const orderID = props.orderId;
  const deliveryObId = props.deliveryObId;

  const [deliveryDetails, setDeliveryDetails] = useState({});
  const [orderDetails, setOrderDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetchDeliveryDetails(
      orderID,
      deliveryObId,
      (data) => {
        setDeliveryDetails(data);
        setLoading(false);
      },
      (data) => {
        setOrderDetails(data);
        setLoading(false);
      }
    );
  }, [orderID]);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <CheckedDetailsPresentation
      deliveryDetails={deliveryDetails}
      orderDetails={orderDetails}
    />
  );
}

export default CheckedDetailsContainer;
