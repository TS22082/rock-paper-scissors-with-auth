import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  signOutButton: {
    width: 100,
    height: 100,
    backgroundColor: "#7986cb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  gameChoiceContainer: {
    width: 400,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },

  gameChoiceButton: {
    width: 100,
    height: 50,
    backgroundColor: "#5c6bc0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
  },
});

export default homeStyles;
