import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    height: "100%",
  },
  label: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 26,
    color: "rgba(11, 52, 85, 1)",
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  detailLabel: {
    fontSize: 20,
    fontWeight: "600",
  },
  detailValue: {
    fontSize: 20,
  },
  checkDeliveryButton: {
    backgroundColor: "rgba(11, 52, 85, 1)",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 32,
  },
  checkDeliveryButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  delImage: {
    width: "100%",
    height: 250,
    marginBottom: 40,
  },
  deliveryMode: {
    backgroundColor: "green",
    padding: 5,
    borderRadius: 5,
  },
  partialMode: {
    backgroundColor: "orange",
    padding: 5,
    borderRadius: 5,
  },
  modeText: {
    color: "white",
    fontWeight: "bold",
  },
});
