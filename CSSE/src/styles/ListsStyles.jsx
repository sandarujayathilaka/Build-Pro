import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    margin: 10,
    height: 130,
    padding: 16,
    backgroundColor: "rgba(229, 234, 238, 1)", 
    borderRadius: 8,
    borderColor: "rgba(46, 73, 96, 1)", 
    borderWidth: 2,
  },
  cardReject: {
    margin: 10,
    height: 130,
    padding: 16,
    backgroundColor: "rgba(255, 0, 0, 0.1)", 
    borderRadius: 8,
    borderColor: "red", 
    borderWidth: 2,
  },
  cardAccept: {
    margin: 10,
    height: 130,
    padding: 16,
    backgroundColor: "rgba(0, 255, 0, 0.1)", 
    borderRadius: 8,
    borderColor: "green", 
  },
  customButton: {
    backgroundColor: "orange", 
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 25,
    height: 45,
  },
  buttonText: {
    color: "black", 
    fontWeight: "bold",
  },
  mainText: {
    color: "rgba(11, 52, 85, 1)", 
    fontWeight: "600",
    fontSize: 30,
  },
  cardImage: {
    width: 100,
    height: 100, 
    marginLeft: 250,
    marginTop: -95,
    borderRadius: 8,
  },
  subText: {
    color: "black",
    fontWeight: "400",
    fontSize: 18,
  },
  searchBar: {
    padding: 2,
    borderColor: "rgba(11, 52, 85, 1)",
    borderWidth: 1,
    marginTop: 20,
    margin: 10,
    borderRadius: 5,
  },
});
