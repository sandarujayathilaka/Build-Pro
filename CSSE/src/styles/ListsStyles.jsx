import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    margin: 10,
    height: 130,
    padding: 16,
    backgroundColor: "rgba(255, 255, 0, 0.2)", // Change the background color as needed
    borderRadius: 8,
    borderColor: "orange", // Border color
    borderWidth: 2,
  },
  customButton: {
    backgroundColor: "orange", // Change the button color here
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 25,
    height: 45,
  },
  buttonText: {
    color: "black", // Change the text color here
    fontWeight: "bold",
  },
  mainText: {
    color: "black", // Change the text color here
    fontWeight: "600",
    fontSize: 30,
  },
  cardImage: {
    width: 100,
    height: 100, // Adjust this value to control the image height
    marginLeft: 250,
    marginTop: -95,
    borderRadius: 8,
  },
  subText: {
    color: "black", // Change the text color here
    fontWeight: "400",
    fontSize: 20,
  },
});
