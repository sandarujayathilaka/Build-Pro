import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
        gridContainer: {
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          marginBottom: 16,
        },
        gridItem: {
          flexBasis: "48%", // Adjust this value to control the width of each card (2 cards in a row)
          backgroundColor: "rgba(255, 255, 0, 0.2)",
          padding: 16,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: "orange",
          marginVertical: 8,
        },
        cardImage: {
          width: "100%",
          height: 90, // Adjust this value to control the image height
          borderRadius: 8,
        },
        cardTitle: {
          marginTop: 8,
          textAlign: "center",
          fontSize: 30,
        },
         mainText: {
          color: "black",
          fontWeight: "600",
          textAlign: "center",
          fontSize: 40,
          marginTop:15,
          marginBottom:15,
        },

});
