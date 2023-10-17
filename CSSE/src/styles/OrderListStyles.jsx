import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#fff",
        height:"100%"
      },
      title: {
        padding: 3,
        backgroundColor: "#fff",
        fontWeight: "bold",
        fontSize: 18,
      },
      delivery: {
        padding: 3,
        fontWeight: "bold",
        fontSize: 15,
        color: "red",
        textAlign:"center",
      },
    card: {
        margin: 10,
        padding: 16,
        backgroundColor: "rgba(255, 255, 0, 0.2)", // Change the background color as needed
        borderRadius: 8,
        borderColor: "orange", // Border color
        borderWidth: 2,
        marginTop:20,
      },
      customButton: {
        backgroundColor: "orange", // Change the button color here
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginTop: 20,
        height: 45,
      },
      cardImage: {
        position: "absolute",
        top: 220,
        left: "33%",
        width: 150, // Set the desired width
        height: 150, // Set the desired height
        borderRadius: 8,
      },
      buttonText: {
        color: "black", // Change the text color here
        fontWeight: "bold",
      },
      errormsg: {
        color: "red", // Change the text color here
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        top: 370,
      },
      mainText: {
        color: "black", // Change the text color here
        fontWeight: "600",
        fontSize: 30,
      },
      searchBar: {
        padding: 10,
        borderColor: "gray",
        borderWidth: 1,
        marginTop:25,
        margin: 10,
        borderRadius: 5,
      },
});
