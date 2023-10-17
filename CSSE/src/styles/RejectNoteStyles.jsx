import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    flexGrow: 1,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "left",
    color: "rgba(11, 52, 85, 1)",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333333",
  },
  input: {
    height: 50,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    marginBottom: 2,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  radioGroup: {
    flexDirection: "row",
    marginBottom: 20,
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  radioText: {
    marginLeft: 5,
    fontSize: 16,
  },
  quantityText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333333",
  },
  acceptButton: {
    backgroundColor: "rgba(11, 52, 85, 1)",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  rejectButton: {
    backgroundColor: "#FF3C09", 
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  textArea: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    padding: 10,
    height: 120,
    marginBottom: 20,
  },

  delImage: {
    width: "95%",
    height: 180,
    marginBottom: 20,
  },
});
