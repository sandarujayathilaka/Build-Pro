import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 10, 
        backgroundColor: "rgba(255, 255, 0, 0.2)",
      },
      card: {
        margin: 10,
        padding: 16,
        backgroundColor: "rgba(255, 255, 0, 0.2)", // Change the background color as needed
        borderRadius: 8,
        borderColor: "orange", // Border color
        borderWidth: 2,
       
      },
      delivery: {
        padding: 3,
        fontWeight: "bold",
        fontSize: 15,
        color: "red",
        textAlign:"center",
      },
      buttonContainer: {
        flexDirection: "row",
        marginTop: 10,
      },
      customButton: {
        backgroundColor: "orange",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginTop: 15,
        marginBottom: 15,
        height: 45,
       
      },
      buttonText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
      },
      mainText: {
        color: "black",
        fontWeight: "600",
        textAlign: "center",
        fontSize: 30,
        marginBottom:30,
        marginTop:20,
      },
      text: {
        color: "black",
        fontWeight: "300",
        alignItems: "center",
        fontSize: 20,
        marginTop: 5,
      },
      macButton: {
        backgroundColor: "orange",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginTop: 325,
        height: 45,
      },
      container: {
        padding: 10,
      },
      labeltop: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
        marginTop: 15,
      },
      label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
      },
      
      labelContainer: {
        flexDirection: "row",
        justifyContent: "space-between", // This will align Quantity on the left and Total on the right
        alignItems: "center", // To vertically center the text
        marginBottom: 5,
      },
      input: {
        height: 50,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderRadius: 100,
      },
      errorText: {
        color: "red",
        marginBottom: 10,
      },
});
