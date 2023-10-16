import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    height: "100%",
  },
  label: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  detailLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  detailValue: {
    fontSize: 18,
  },
  checkDeliveryButton: {
    backgroundColor: "#007BFF",
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
