import { render } from "@testing-library/react-native";
import DeliveryNote from "./src/screens/DeliveryNote";

test("renders the DeliveryNote component", () => {
  const { getByText } = render(<DeliveryNote deliveryId="testDeliveryId" />);
  expect(getByText("Delivery Details")).toBeDefined();
});
